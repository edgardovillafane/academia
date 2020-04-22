import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsApi } from './alumnos.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {

  constructor(private http: HttpClient) {}
  getData(
    sort: string,
    order: string,
    page: number
  ): Observable<StudentsApi> {
    const href = 'http://localhost:3000/api/employees';
    const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${
      page + 1
    }`;

    return this.http.get<StudentsApi>(requestUrl);
  }
}
