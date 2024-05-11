import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Address from 'src/app/models/address.model';
import { AddressService } from 'src/app/services/address.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent {
  addesses: Address[] = [];
  client: string = '';

  constructor(
    private route: ActivatedRoute,
    private addressService: AddressService,
    private clientService: ClientService,
    private router: Router,
    private location: Location
  ) {}

  goBack(): void {
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const clientId = params['id'];
      this.getAddressesByClientId(clientId);
      this.getClientById(clientId);
    });
  }

  getAddressesByClientId(id: number): void {
    this.addressService.getAddressesByClientId(id).subscribe((addresses) => {
      this.addesses = addresses;
    });
  }

  getClientById(id: number): void {
    this.clientService.getById(id).subscribe((client) => {
      this.client = `${client.firstName} ${client.lastName}`;
    });
  }

  goToCreate() {
    this.route.params.subscribe((params) => {
      const clientId = params['id'];
      this.router.navigate([`/addresses/${clientId}/create`]);
    });
  }
  goToUpdate(addressId: number) {
    this.route.params.subscribe((params) => {
      const clientId = params['id'];
      this.router.navigate([`/addresses/${clientId}/${addressId}`]);
    });
  }

  delete(id: number): void {
    this.addressService.delete(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
