import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  private awsEndpoint = 'SEU_ENDPOINT_AWS'; // Substitua pelo endpoint real

  constructor(private http: HttpClient) {}

  sendLeadData(leadData: any): Observable<any> {
    return this.http.post(this.awsEndpoint, leadData);
  }
}
