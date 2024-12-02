import { Component } from '@angular/core';
import { BaseSectionComponent } from "../../layout/base-section/base-section.component";
import { DelisystemApiService } from '../../services/delisystem-api.service';
import { SimpleCompany } from '../../models/api/company';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from "../../components/section-header/section-header.component";

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [BaseSectionComponent, CommonModule, SectionHeaderComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  companies: SimpleCompany[] = [];

  constructor(private apiService: DelisystemApiService) { }

  ngOnInit() {
    this.apiService.getCompanies().subscribe({
      next: (response) => {
        this.companies = response.filter(company => !!company.logo);
      },
      error(err) {
        console.error(err)
      }
    })
  }
}
