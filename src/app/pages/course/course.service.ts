import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) { }

  saveCourse(body: Course): Observable<Course> {
    return this.http.post<Course>('http://localhost:8080/curso', body);
  }

  listCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:8080/curso');
  }

  deleteCourse(courseId: number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:8080/curso/${courseId}`);
  }

  findCourse(courseId: number): Observable<Course> {
    return this.http.get<Course>(`http://localhost:8080/curso/${courseId}`);
  }
}