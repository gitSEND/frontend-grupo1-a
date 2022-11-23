import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { pagesRoutes } from './pages.routes';

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
