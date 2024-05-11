import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Address from '../models/address.model';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private baseUrl = 'https://localhost:7075/api/Address';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Address[]> {
    return this.http.get<Address[]>(this.baseUrl);
  }

  getAddressesByClientId(id: number): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.baseUrl}/Client/${id}`);
  }

  getAddressById(id: number): Observable<Address> {
    return this.http.get<Address>(`${this.baseUrl}/${id}`);
  }

  create(address: Address): Observable<Address> {
    return this.http.post<Address>(this.baseUrl, address);
  }

  update(id: number, address: Address): Observable<Address> {
    return this.http.put<Address>(`${this.baseUrl}/${id}`, address);
  }

  delete(id: number): Observable<Address> {
    return this.http.delete<Address>(this.baseUrl + '/' + id);
  }
}
