import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Registration } from './register.model';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  private endpointPrefix = '';
  constructor(
    private http: HttpClient,
  ) {}

  save(registration: Registration): Observable<{}> {
    return this.http.post(this.getEndpointFor('api/register'), registration);
  }

  getEndpointFor(api: string): string {

    return `${this.endpointPrefix}${api}`;
  }
}
