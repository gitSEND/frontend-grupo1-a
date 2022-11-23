import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page.component';

@NgModule({
  declarations: [PageComponent, DashboardComponent],
  imports: [CommonModule, FormsModule, SharedModule, RouterModule],
})
export class PageModule {}
