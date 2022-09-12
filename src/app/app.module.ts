import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinancialYearComponent } from './financial-year/financial-year.component';
import { FinancialYearCreateComponent } from './financial-year/components/financial-year-create/financial-year-create.component';
import { FinancialYearUpdateComponent } from './financial-year/components/financial-year-update/financial-year-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProcurementNatureComponent } from './procurement-nature/procurement-nature.component';
import { ProcurementNatureCreateComponent } from './procurement-nature/components/procurement-nature-create/procurement-nature-create.component';
import { ProcurementNatureUpdateComponent } from './procurement-nature/components/procurement-nature-update/procurement-nature-update.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { PaymentTypeCreateComponent } from './payment-type/components/payment-type-create/payment-type-create.component';
import { PaymentTypeUpdateComponent } from './payment-type/components/payment-type-update/payment-type-update.component';
import { EgpCountryComponent } from './egp-country/egp-country.component';
import { EgpCountryUpdateComponent } from './egp-country/components/egp-country-update/egp-country-update.component';
import { EgpCountryCreateComponent } from './egp-country/components/egp-country-create/egp-country-create.component';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './toast/toast.component';
import { KeywordBaseComponent } from './keyword-base/keyword-base.component';
import { KeywordBaseCreateComponent } from './keyword-base/components/keyword-base-create/keyword-base-create.component';
import { KeywordBaseUpdateComponent } from './keyword-base/components/keyword-base-update/keyword-base-update.component';
import { ProcurementMethodComponent } from './procurement-method/procurement-method.component';
import { ProcurementMethodCreateComponent } from './procurement-method/components/procurement-method-create/procurement-method-create.component';
import { ProcurementMethodUpdateComponent } from './procurement-method/components/procurement-method-update/procurement-method-update.component';
import { PaymentConfigComponent } from './payment-config/payment-config.component';
import { PaymentConfigCreateComponent } from './payment-config/components/payment-config-create/payment-config-create.component';
import { PaymentConfigUpdateComponent } from './payment-config/components/payment-config-update/payment-config-update.component';
import { SafeHtmlPipe } from './payment-config/safe-html.pipe';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountryComponent,
    HomeComponent,
    LoginComponent,
    FinancialYearComponent,
    FinancialYearCreateComponent,
    FinancialYearUpdateComponent,
    ProcurementNatureComponent,
    ProcurementNatureCreateComponent,
    ProcurementNatureUpdateComponent,
    PaymentTypeComponent,
    PaymentTypeCreateComponent,
    PaymentTypeUpdateComponent,
    EgpCountryComponent,
    EgpCountryUpdateComponent,
    EgpCountryCreateComponent,
    ToastComponent,
    KeywordBaseComponent,
    KeywordBaseCreateComponent,
    KeywordBaseUpdateComponent,
    ProcurementMethodComponent,
    ProcurementMethodCreateComponent,
    ProcurementMethodUpdateComponent,
    PaymentConfigComponent,
    PaymentConfigCreateComponent,
    PaymentConfigUpdateComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule,
    AccordionModule,
    ButtonModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
