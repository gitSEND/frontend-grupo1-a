import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './maintenance.routes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceRoutingModule {}
