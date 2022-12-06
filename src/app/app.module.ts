import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssistanceComponent } from './pages/assistance/assistance.component';
import { SaveAssistanceComponent } from './pages/assistance/save-assistance/save-assistance.component';
import { CourseComponent } from './pages/course/course.component';
import { ListCourseComponent } from './pages/course/list-course/list-course.component';
import { SaveCourseComponent } from './pages/course/save-course/save-course.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListStudentComponent } from './pages/student/list-student/list-student.component';
import { SaveStudentComponent } from './pages/student/save-student/save-student.component';
import { StudentComponent } from './pages/student/student.component';
import { ListTeacherComponent } from './pages/teacher/list-teacher/list-teacher.component';
import { SaveTeacherComponent } from './pages/teacher/save-teacher/save-teacher.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent, StudentComponent, TeacherComponent, ListStudentComponent, SaveStudentComponent, SaveTeacherComponent, ListTeacherComponent, CourseComponent, SaveCourseComponent, ListCourseComponent, AssistanceComponent, SaveAssistanceComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
