import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/apiResponse.models';

@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  constructor(private http: HttpClient) { }

  getDivisas(): Observable<ApiResponse>{
    const url = environment.urlApi;
    return this.http.get<ApiResponse>(url);
  }
}
