import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) { }

  saveCourse(body: Course): Observable<Course> {
    return this.http.post<Course>(`${environment.host}/curso`, body);
  }

  listCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.host}/curso`);
  }

  deleteCourse(courseId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.host}/curso/${courseId}`);
  }

  findCourse(courseId: number): Observable<Course> {
    return this.http.get<Course>(`${environment.host}/curso/${courseId}`);
  }
}