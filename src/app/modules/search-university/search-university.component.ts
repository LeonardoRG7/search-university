import { Component, OnInit } from '@angular/core';
import { University } from 'src/app/core/interfaces/university';
import { SearchService } from 'src/app/core/services/search-service/search.service';

@Component({
  selector: 'app-search-university',
  templateUrl: './search-university.component.html',
  styleUrls: ['./search-university.component.scss'],
})
export class SearchUniversityComponent implements OnInit {
  universities: University[] = [];
  filterUniversities: University[] = [];
  countrySet: Set<string> = new Set();
  selectedCountry: string = '';

  constructor(private _searchService: SearchService) {}

  ngOnInit(): void {
    this._searchService
      .getForCountry('colombia')
      .subscribe((uni: University[]) => {
        this.universities = uni;
        this.filterUniversities = [...uni];
      });

    this._searchService.getAll().subscribe((res) => {
      res.forEach(({ country }: University) => {
        this.countrySet.add(country);
      });
    });
  }

  filter(university: any) {
    const search: string = university.target.value;

    this.filterUniversities = this.universities?.filter(
      ({ name }: University) => {
        return name.toLowerCase().includes(search.toLowerCase());
      }
    );
  }

  onCountryChange(event: any) {
    this.selectedCountry = event.target.value;
    this._searchService
      .getForCountry(this.selectedCountry)
      .subscribe((uni: University[]) => {
        this.universities = uni;
        this.filterUniversities = [...uni];
      });
  }
}
