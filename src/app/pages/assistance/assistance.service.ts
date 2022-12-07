import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Assistance } from '../interfaces/assistance.interface';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {
  constructor(private http: HttpClient) { }

  save(body: Assistance): Observable<Assistance> {
    return this.http.post<Assistance>(`${environment.host}/asistencia`, body)
  }
}