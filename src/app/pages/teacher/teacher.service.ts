import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../interfaces/teacher.interface';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient) { }

  saveTeacher(body: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>('http://localhost:8080/profesor', body);
  }

  listTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>('http://localhost:8080/profesor');
  }

  deleteTeacher(teacherId: number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:8080/profesor/${teacherId}`);
  }

  findTeacher(teacherId: number): Observable<Teacher> {
    return this.http.get<Teacher>(`http://localhost:8080/profesor/${teacherId}`);
  }
}
