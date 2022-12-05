import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student.interfa';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) { }

  saveStudent(body: Student): Observable<Student> {
    return this.http.post<Student>('http://localhost:8080/alumno', body);
  }

  listStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8080/alumno');
  }

  deleteStudent(studentId: number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:8080/alumno/${studentId}`);
  }

  findStudent(studentId: number): Observable<Student> {
    return this.http.get<Student>(`http://localhost:8080/alumno/${studentId}`);
  }

}