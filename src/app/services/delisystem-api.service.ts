import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '../models/api/baseResponse';
import { map, Observable } from 'rxjs';
import { Company, SimpleCompany } from '../models/api/company';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DelisystemApiService {
  readonly apiUrl = 'https://delisystem.azurewebsites.net/api';
  constructor(private httpClient: HttpClient) { }

  getCompanies(): Observable<SimpleCompany[]> {
    return this.httpClient.get<BaseResponse<Company[]>>(`${this.apiUrl}/Company`).pipe(
      map(response => response.data.map(company => {
        return {
          name: company.name,
          url: environment.baseAppUrl + 'store/' + company.routeName,
          logo: company.logoImage
        }
      }))
    );
  }
}
