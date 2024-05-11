import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAddressComponent } from './components/create-address/create-address.component';
import { AddressesComponent } from './pages/addresses/addresses.component';
import { HomeViewComponent } from './pages/home-view/home-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent },
  { path: 'addresses/:id', component: AddressesComponent },
  { path: 'addresses/:id/create', component: CreateAddressComponent },
  { path: 'addresses/:id/:addressId', component: CreateAddressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
