import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '../models/api/baseResponse';
import { map, Observable } from 'rxjs';
import { Company, SimpleCompany } from '../models/api/company';
import { environment } from '../../environments/environment';
import { DateProps } from '../helpers/dateprops';

@Injectable({
  providedIn: 'root'
})
export class DelisystemApiService {
  readonly apiUrl = 'https://core.delisystem.com.br/api';
  constructor(private httpClient: HttpClient) { }

  getCompanies(): Observable<SimpleCompany[]> {
    return this.httpClient.get<BaseResponse<Company[]>>(`${this.apiUrl}/Company`)
      .pipe(
        map(response =>
          response.data.map(company => {
            const renovationDateProps = DateProps.fromUTCString(company.renovationDate.toString());
            const todayDateProps = new DateProps();

            const msDiff = DateProps.getDiff(todayDateProps, renovationDateProps, 'miliseconds');
            const invalidCompanyEmails = ['teste@teste', 'carlosb3rto@gmail.com'];
            const isInvalidCompany = msDiff <= 0 || invalidCompanyEmails.includes(company.email)

            return isInvalidCompany ? undefined : {
              name: company.name,
              url: environment.baseAppUrl + 'store/' + company.routeName,
              logo: company.logoImage
            }
          }
        ).filter(company => !!company)
      )
    );
  }
}
