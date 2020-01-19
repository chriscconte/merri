import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Generator } from './app.component.generator';
import { RedirectTo } from './app.component.redirectTo';
import { AdminConsole } from './app.component.adminConsole';
import { NotFound } from './app.component.notFound';

const routes: Routes = [
  { path: 'generator', component: Generator },
  { path: 'admin', component: AdminConsole },
  { path: '404', component: NotFound },
  { path: ':hash', component: RedirectTo },
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
