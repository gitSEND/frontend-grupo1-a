import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListStudentComponent } from './pages/student/list-student/list-student.component';
import { SaveStudentComponent } from './pages/student/save-student/save-student.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { SharedModule } from './shared/shared.module';
import { SaveTeacherComponent } from './pages/teacher/save-teacher/save-teacher.component';
import { ListTeacherComponent } from './pages/teacher/list-teacher/list-teacher.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, StudentComponent, TeacherComponent, ListStudentComponent, SaveStudentComponent, SaveTeacherComponent, ListTeacherComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
