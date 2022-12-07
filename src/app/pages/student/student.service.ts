import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../interfaces/student.interfa';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }

  saveStudent(body: Student): Observable<Student> {
    return this.http.post<Student>(`${environment.host}/alumno`, body);
  }

  listStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${environment.host}/alumno`);
  }

  deleteStudent(studentId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.host}/alumno/${studentId}`);
  }

  findStudent(studentId: number): Observable<Student> {
    return this.http.get<Student>(`${environment.host}/alumno/${studentId}`);
  }

}