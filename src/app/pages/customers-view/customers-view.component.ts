import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CustomerRemove } from 'src/app/actions/customer.actions';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.scss']
})
export class CustomersViewComponent implements OnInit {
  customers: Observable<Customer[]>;

  constructor(
    private store: Store<{ customers: Customer[] }>
  ) { }

  ngOnInit() {
    this.customers = this.store.pipe(select('customers'));
  }

  removeCustomer(customerIndex): void {
    this.store.dispatch(new CustomerRemove(customerIndex));
  }

}
