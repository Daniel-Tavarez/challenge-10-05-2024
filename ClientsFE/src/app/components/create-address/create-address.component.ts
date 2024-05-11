import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss'],
})
export class CreateAddressComponent implements OnInit {
  addressForm: FormGroup;
  isEditing = false;
  clientId: number = 0;
  client: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private addressService: AddressService,
    private clientService: ClientService,
    private router: Router
  ) {
    this.addressForm = this.fb.group({
      id: [0],
      clientId: [this.clientId ?? '', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  goBack(): void {
    this.router.navigate([`/addresses/${this.clientId}`]);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const addressId = params['addressId'];
      const clientId = params['id'];
      this.clientId = clientId;
      this.getClientById(this.clientId);
      if (addressId) {
        this.isEditing = true;
        this.addressService.getAddressById(addressId).subscribe((address) => {
          this.addressForm.patchValue(address);
        });
      }
    });
  }

  getClientById(id: number): void {
    this.clientService.getById(id).subscribe((client) => {
      this.client = `${client.firstName} ${client.lastName}`;
    });
  }

  onSubmit(): void {
    this.route.params.subscribe((params) => {
      const clientId = params['id'];
      const addressId = params['addressId'];
      if (this.isEditing) {
        this.addressService.update(addressId, this.addressForm.value).subscribe(() => {
          this.router.navigate([`/addresses/${clientId}`]);
        });
      } else {
        this.addressForm.patchValue({clientId: clientId});
        this.addressService.create(this.addressForm.value).subscribe(() => {
          this.router.navigate([`/addresses/${clientId}`]);
        });
      }
    });
  }
}
