import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceComponent } from './maintenance.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  declarations: [MaintenanceComponent, StudentComponent, TeacherComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, MaintenanceRoutingModule],
})
export class MaintenanceModule { }
