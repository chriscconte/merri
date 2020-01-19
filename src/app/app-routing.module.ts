import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Generator } from './app.component.generator';
import { RedirectTo } from './app.component.redirectTo';
import { AdminConsole } from './app.component.adminConsole';
import { NotFound } from './app.component.notFound';

const routes: Routes = [
  { path: 'generator', component: Generator },
  { path: ':hash',      component: RedirectTo },
  {
    path: 'admin',
    component: AdminConsole,
    // data: { title: 'Admin Console' }
  },
  {
    path: '404', component: NotFound,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/generator',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
