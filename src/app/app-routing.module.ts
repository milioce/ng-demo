import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'rxjs', loadChildren: './rxjs/rxjs.module#RxjsModule' },
  { path: 'forms', loadChildren: './forms/demoforms.module#DemoFormsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

