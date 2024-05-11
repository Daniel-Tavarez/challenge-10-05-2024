import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private baseUrl = 'https://localhost:7075/api/Client';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }

  getById(id: number): Observable<Client> {
    return this.http.get<Client>(this.baseUrl + '/' + id);
  }

  create(movie: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, movie);
  }
}
