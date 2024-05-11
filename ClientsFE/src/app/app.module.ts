import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAddressComponent } from './components/create-address/create-address.component';
import { AddressesComponent } from './pages/addresses/addresses.component';
import { HomeViewComponent } from './pages/home-view/home-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    AddressesComponent,
    CreateAddressComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
