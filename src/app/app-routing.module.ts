import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService as AuthGuard } from './api/auth/auth-guard-service';
import { FinancialYearComponent } from './financial-year/financial-year.component';
import { FinancialYearCreateComponent } from './financial-year/components/financial-year-create/financial-year-create.component';
import { FinancialYearUpdateComponent } from './financial-year/components/financial-year-update/financial-year-update.component';
import { ProcurementNatureComponent } from './procurement-nature/procurement-nature.component';
import { ProcurementNatureCreateComponent } from './procurement-nature/components/procurement-nature-create/procurement-nature-create.component';
import { ProcurementNatureUpdateComponent } from './procurement-nature/components/procurement-nature-update/procurement-nature-update.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { PaymentTypeCreateComponent } from './payment-type/components/payment-type-create/payment-type-create.component';
import { PaymentTypeUpdateComponent } from './payment-type/components/payment-type-update/payment-type-update.component';
import { EgpCountryComponent } from './egp-country/egp-country.component';
import { EgpCountryCreateComponent } from './egp-country/components/egp-country-create/egp-country-create.component';
import { EgpCountryUpdateComponent } from './egp-country/components/egp-country-update/egp-country-update.component';
import { KeywordBaseComponent } from './keyword-base/keyword-base.component';
import { KeywordBaseCreateComponent } from './keyword-base/components/keyword-base-create/keyword-base-create.component';
import { KeywordBaseUpdateComponent } from './keyword-base/components/keyword-base-update/keyword-base-update.component';
import { ProcurementMethodComponent } from './procurement-method/procurement-method.component';
// import { ProcurementMethodCreateComponent } from './procurement-method/components/procurement-method-create/procurement-method-create.component';
// import { ProcurementMethodUpdateComponent } from './procurement-method/components/procurement-method-update/procurement-method-update.component';



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
    path: 'payment-type',
    component: PaymentTypeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'payment-type/create',
    component: PaymentTypeCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'payment-type/update/:paymentTypeId',
    component: PaymentTypeUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'egp-country',
    component: EgpCountryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'egp-country/create',
    component: EgpCountryCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'egp-country/update/:egpCountryId',
    component: EgpCountryUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'keyword-base',
    component: KeywordBaseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'keyword-base/create',
    component: KeywordBaseCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'keyword-base/update/:keywordBaseId',
    component: KeywordBaseUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'procurement-method',
    component: ProcurementMethodComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'procurement-method/create',
  //   component: ProcurementMethodCreateComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'procurement-method/update/:procurement',
  //   component: ProcurementMethodUpdateComponent,
  //   canActivate: [AuthGuard]
  // },
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
