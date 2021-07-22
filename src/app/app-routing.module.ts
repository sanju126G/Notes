import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path: 'directives',component:DirectivesComponent},
  {path: 'databinding',component:DatabindingComponent},
  {path: 'pipes',component:PipesComponent},
  {path: 'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
