import { FinancialYearUpdateComponent } from './financial-year/components/financial-year-update/financial-year-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService as AuthGuard } from './api/auth/auth-guard-service';
import { FinancialYearComponent } from './financial-year/financial-year.component';
import { FinancialYearCreateComponent } from './financial-year/components/financial-year-create/financial-year-create.component';
import { ProcurementNatureComponent } from './procurement-nature/procurement-nature.component';
import { ProcurementNatureCreateComponent } from './procurement-nature/components/procurement-nature-create/procurement-nature-create.component';
import { ProcurementNatureUpdateComponent } from './procurement-nature/components/procurement-nature-update/procurement-nature-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'country',
    component: CountryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'financial-year',
    component: FinancialYearComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'financial-year/create',
    component: FinancialYearCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'financial-year/update/:financialYearId',
    component: FinancialYearUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'procurement-nature',
    component: ProcurementNatureComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'procurement-nature/create',
    component: ProcurementNatureCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'procurement-nature/update/:procurementNatureId',
    component: ProcurementNatureUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
