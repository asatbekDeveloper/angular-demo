import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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
    ProcurementNatureUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
