export type DateStringFormat = 'yyyy-mm-dd' | 'dd-mm-yyyy' | 'UTC';
export type TimeUnit = 'miliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years'

export class DateProps {
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth() + 1;
  day: number = new Date().getDate();
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  milliseconds: number = 0;
  weekday: number = new Date().getDay();

  constructor(params?: Partial<DateProps>) {
    if (params){
      Object.assign(this, {...params});
    }
  }

  //#region STATIC FUNCTIONS

  static startOfWeek(dateProps: DateProps = new DateProps()) {
    return DateProps.addDay(dateProps, -dateProps.weekday)
  }

  static endOfWeek(dateProps: DateProps = new DateProps()) {
    return DateProps.addDay(dateProps, 6 - dateProps.weekday)
  }

  static startOfMonth(dateProps: DateProps = new DateProps()): DateProps {
    return DateProps.addDay(dateProps, -dateProps.day + 1);
  }

  static endOfMonth(dateProps: DateProps = new DateProps()): DateProps {
    const nextMonth = DateProps.addMonths(dateProps, 1);
    return DateProps.addDay(nextMonth, -nextMonth.day);
  }

  static fromDate(date: Date): DateProps {
    date = new Date(date);
    return new DateProps({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      milliseconds: date.getMilliseconds(),
      weekday: date.getDay()
    });
  }

  static fromUTCString(utcString: string): DateProps {
    const fullFormatRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?Z?$/;
    const simpleFormatRegex = /^(\d{4})-(\d{2})-(\d{2})$/;

    let match;

    // Formato completo
    if ((match = utcString.match(fullFormatRegex))) {
      const [, year, month, day, hours, minutes, seconds] = match;

      // Usa `Date` com fuso horário UTC
      const date = new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);
      return DateProps.fromDate(date);
    }

    // Formato simplificado
    if ((match = utcString.match(simpleFormatRegex))) {
      const [, year, month, day] = match;

      // Tratar como UTC sem tempo
      const date = new Date(`${year}-${month}-${day}T00:00:00`);
      return DateProps.fromDate(date);
    }

    // Caso o formato não seja válido
    throw new Error('Invalid UTC string format. Expected formats: YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss[Z]');
  }

  static fromTokenDate(dateString: string): DateProps {
    // Regex para corresponder o formato "MM/DD/YYYY h:mm:ss AM/PM"
    const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4}) (\d{1,2}):(\d{2}):(\d{2}) (AM|PM)$/;

    const match = dateString.match(regex);

    if (!match) {
      throw new Error('Invalid format. Expected format: MM/DD/YYYY h:mm:ss AM/PM');
    }

    const [, month, day, year, hours, minutes, seconds, period] = match;

    let parsedHours = parseInt(hours, 10);

    // Ajustar para o formato de 24 horas
    if (period === 'PM' && parsedHours !== 12) {
      parsedHours += 12; // Converte para 24h, exceto se for 12 PM
    } else if (period === 'AM' && parsedHours === 12) {
      parsedHours = 0; // Ajuste para 00:xx:xx para 12 AM
    }

    const date = new Date(Date.UTC(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10), parsedHours, parseInt(minutes, 10), parseInt(seconds, 10)));

    return new DateProps({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      milliseconds: date.getMilliseconds(),
      weekday: date.getDay(),
    });
  }

  static fromFormatedString(formatedString: string): DateProps {
    const formatRegex = /^(\d{2})-(\d{2})-(\d{4})$/;

    const match = formatedString.match(formatRegex);

    if (!match) {
      throw new Error(
        'Invalid format. Expected format: DD-MM-YYYY'
      );
    }

    const [, day, month, year] = match;
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

    return new DateProps({
      year: parseInt(year, 10),
      month: parseInt(month, 10),
      day: parseInt(day, 10),
      hours: 0, // Valores padrão
      minutes: 0,
      seconds: 0,
      weekday: date.getDay()
    });
  }

  static toDate(dateProps: DateProps): Date {
    return new Date(
      dateProps.year,
      dateProps.month - 1,
      dateProps.day,
      dateProps.hours,
      dateProps.minutes,
      dateProps.seconds,
      dateProps.milliseconds
    );
  }

  static toString(dateProps: DateProps, format: DateStringFormat = 'UTC'): string {
    const getFormatedValue = (key: keyof DateProps) => {
      return String(dateProps[key]).padStart(2, '0');
    }

    switch (format) {
      case "yyyy-mm-dd":
        return [dateProps.year, getFormatedValue('month'),getFormatedValue('day')].join('-');
      case "dd-mm-yyyy":
        return [getFormatedValue('day'), getFormatedValue('month'), dateProps.year].join('-');
      case "UTC":
        return this.toUTCString(dateProps);
      default:
        break;
    }

    return this.toUTCString(dateProps);
  }

  static toUTCString(dateProps: DateProps): string {
    return `${dateProps.year}-${String(dateProps.month).padStart(2, '0')}-${String(dateProps.day).padStart(2, '0')}T` +
           `${String(dateProps.hours).padStart(2, '0')}:${String(dateProps.minutes).padStart(2, '0')}:${String(dateProps.seconds).padStart(2, '0')}`;
  }

  static getDiff(start: DateProps, end: DateProps, unit: TimeUnit = 'days'): number {
    const startDate = DateProps.toDate(start);
    const endDate = DateProps.toDate(end);
    const diffMs = endDate.getTime() - startDate.getTime(); // Diferença em milissegundos

    switch (unit) {
      case 'days':
        return Math.floor(diffMs / (1000 * 3600 * 24)); // Diferença em dias
      case 'hours':
        return Math.floor(diffMs / (1000 * 3600)); // Diferença em horas
      case 'minutes':
        return Math.floor(diffMs / (1000 * 60)); // Diferença em minutos
      case 'seconds':
        return Math.floor(diffMs / 1000); // Diferença em segundos
      case 'miliseconds':
        return Math.floor(diffMs); // Diferença em segundos
      case "months": {
        const yearDiff = end.year - start.year;
        const monthDiff = end.month - start.month;
        const totalMonths = yearDiff * 12 + monthDiff;

        // Ajustar para caso o dia no "end" seja menor que o "start"
        if (end.day < start.day) {
          return totalMonths - 1;
        }
        return totalMonths;
      }
      case 'years': {
        let yearDiff = end.year - start.year;

        // Ajustar para caso o mês/dia no "end" seja menor que o "start"
        if (
          end.month < start.month ||
          (end.month === start.month && end.day < start.day)
        ) {
          yearDiff -= 1;
        }
        return yearDiff;
      }
      default:
        return 0;
    }
  }

  static addDay(date: DateProps, days: number = 1): DateProps {
    const daysInMonth = (year: number, month: number): number => {
      return new Date(year, month, 0).getDate(); // Último dia do mês
    };

    const newDate = new DateProps(date); // Copia para evitar mutação direta

    while (days !== 0) {
      if (days > 0) {
        // Adicionar um dia por vez
        newDate.day += 1;
        days -= 1;

        const maxDaysInMonth = daysInMonth(newDate.year, newDate.month);

        if (newDate.day > maxDaysInMonth) {
          newDate.day = 1; // Reinicia dia
          newDate.month += 1; // Incrementa mês

          if (newDate.month > 12) {
            newDate.month = 1; // Reinicia para janeiro
            newDate.year += 1; // Incrementa ano
          }
        }
      } else {
        // Subtrair um dia por vez
        newDate.day -= 1;
        days += 1;

        if (newDate.day <= 0) {
          newDate.month -= 1; // Retrocede mês

          if (newDate.month <= 0) {
            newDate.month = 12; // Retrocede para dezembro
            newDate.year -= 1; // Retrocede ano
          }

          newDate.day = daysInMonth(newDate.year, newDate.month); // Ajusta para o último dia do mês anterior
        }
      }
    }

    const updatedDate = DateProps.toDate(newDate);
    newDate.weekday = updatedDate.getDay();

    return newDate;
  }

  static addMonths(date: DateProps, months: number = 1): DateProps {
    const newDate = new DateProps(date); // Copia para evitar mutação direta

    while (months !== 0) {
      if (months > 0) {
        newDate.month += 1;
        months -= 1;

        if (newDate.month > 12) {
          newDate.month = 1;
          newDate.year += 1;
        }
      } else {
        newDate.month -= 1;
        months += 1;

        if (newDate.month <= 0) {
          newDate.month = 12;
          newDate.year -= 1;
        }
      }
    }

    // Ajustar o dia para não ultrapassar os dias do mês
    const daysInMonth = new Date(newDate.year, newDate.month, 0).getDate();
    if (newDate.day > daysInMonth) {
      newDate.day = daysInMonth;
    }

    // Recalcular weekday
    const updatedDate = DateProps.toDate(newDate);
    newDate.weekday = updatedDate.getDay();

    return newDate;
  }

  static addYears(date: DateProps, years: number = 1): DateProps {
    const newDate = new DateProps(date); // Copia para evitar mutação direta

    newDate.year += years;

    // Ajustar o dia para não ultrapassar os dias do mês (ano bissexto)
    const daysInMonth = new Date(newDate.year, newDate.month, 0).getDate();
    if (newDate.day > daysInMonth) {
      newDate.day = daysInMonth;
    }

    // Recalcular weekday
    const updatedDate = DateProps.toDate(newDate);
    newDate.weekday = updatedDate.getDay();

    return newDate;
  }

  static toEndOfDay(date: DateProps): DateProps {
    date = new DateProps(date);
    date.hours = 23;
    date.minutes = 59;
    date.seconds = 59;
    date.milliseconds = 999;

    return date;
  }

  //#endregion

  public toDate(){
    return DateProps.toDate(this);
  }

  public toString(format: DateStringFormat = 'dd-mm-yyyy'){
    return DateProps.toString(this, format);
  }

  public toUTCString(){
    return DateProps.toUTCString(this);
  }

  public getDiff(dateProps2: DateProps, unit: TimeUnit = 'days'){
    return DateProps.getDiff(dateProps2, this, unit);
  }

  public addDay(amount: number) {
    const newDateProps = DateProps.addDay(this, amount);
    Object.assign(this, newDateProps);
    return this;
  }

  public addMonths(amount: number) {
    const newDateProps = DateProps.addMonths(this, amount);
    Object.assign(this, newDateProps);
    return this;
  }

  public addYears(amount: number) {
    const newDateProps = DateProps.addYears(this, amount);
    Object.assign(this, newDateProps);
    return this;
  }

  public toEndOfDay() {
    const newDateProps = DateProps.toEndOfDay(this);
    return newDateProps;
  }

}
