import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'alumno',
    component: StudentComponent,
    children: [
      {
        path: 'listar',
        component: ListStudentComponent
      },
      {
        path: 'registrar',
        component: SaveStudentComponent
      },
      {
        path: 'actualizar/:idAlumno',
        component: SaveStudentComponent
      },
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'profesor',
    component: TeacherComponent,
    children: [
      {
        path: 'listar',
        component: ListTeacherComponent
      },
      {
        path: 'registrar',
        component: SaveTeacherComponent
      },
      {
        path: 'actualizar/:idProfesor',
        component: SaveTeacherComponent
      },
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'curso',
    component: CourseComponent,
    children: [
      {
        path: 'listar',
        component: ListCourseComponent
      },
      {
        path: 'registrar',
        component: SaveCourseComponent
      },
      {
        path: 'actualizar/:idCurso',
        component: SaveCourseComponent
      },
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'asistencia',
    component: AssistanceComponent,
    children: [
      {
        path: 'registrar',
        component: SaveAssistanceComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
