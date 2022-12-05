import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
