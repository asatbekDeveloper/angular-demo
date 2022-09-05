import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'country', component: CountryComponent },
  { path: 'logout', component: AuthComponent },
  { path: 'login',component:LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
