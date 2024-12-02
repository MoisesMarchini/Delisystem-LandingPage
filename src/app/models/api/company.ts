export class Company {
  id: string = '';
  name: string = '';
  numberOfTables: number = 0;
  adressId: string = '';
  email: string = '';
  phone: string = '';
  logoImage: string = '';
  heroImage: string[] = [];
  routeName: string = '';
  renovationDate: Date = new Date();
  open: boolean = true;
  instagramURL: string = '';
  facebookURL: string = '';
  motoBoys: { [key: string]: string }[] = [];

  deliveryFee: any;

  mondayOpeningTime?: string;
  mondayClosingTime?: string;
  tuesdayOpeningTime?: string;
  tuesdayClosingTime?: string;
  wednesdayOpeningTime?: string;
  wednesdayClosingTime?: string;
  thursdayOpeningTime?: string;
  thursdayClosingTime?: string;
  fridayOpeningTime?: string;
  fridayClosingTime?: string;
  saturdayOpeningTime?: string;
  saturdayClosingTime?: string;
  sundayOpeningTime?: string;
  sundayClosingTime?: string;
  indexOrder: string[] = [];
  companyConfigs?: CompanyConfigs;
  companyType?: number;

  adress?: any;
  minimumValue?: number;
  paymentOptions?: any;

  constructor(params?: Partial<Company>) {
    if (params) Object.assign(this, params);
  }
}

export class CompanyConfigs {
  showLocation: boolean = true;
  disableSound: boolean = false;
  whatsAppReplies: any;

  constructor(params?: Partial<CompanyConfigs>) {
    if (params) Object.assign(this, params);
  }
}

export interface SimpleCompany {
  name: string,
  url: string,
  logo: string
}
