import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../interfaces/teacher.interface';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient) { }

  saveTeacher(body: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${environment.host}/profesor`, body);
  }

  listTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${environment.host}/profesor`);
  }

  deleteTeacher(teacherId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.host}/profesor/${teacherId}`);
  }

  findTeacher(teacherId: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${environment.host}/profesor/${teacherId}`);
  }
}
