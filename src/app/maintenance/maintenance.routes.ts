import { Routes } from '@angular/router';
import { MaintenanceComponent } from './maintenance.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

export const routes: Routes = [
  {
    path: '',
    component: MaintenanceComponent,
    children: [
      {
        path: 'teacher',
        component: TeacherComponent,
      },
      {
        path: 'student',
        component: StudentComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profesor',
      },
    ],
  },
];
