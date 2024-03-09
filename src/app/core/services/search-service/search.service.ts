import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { University } from '../../interfaces/university';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private _http: HttpClient) {}

  getAll(): Observable<University[]> {
    return this._http.get<University[]>(`${this.apiUrl}`);
  }

  getForCountry(country: string): Observable<University[]> {
    return this._http.get<University[]>(`${this.apiUrl}?country=${country}`);
  }
}
