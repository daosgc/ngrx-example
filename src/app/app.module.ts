import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './reducers/customer.reducer';
import { CustomersViewComponent } from './pages/customers-view/customers-view.component';
import { CustomerAddComponent } from './pages/customer-add/customer-add.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersViewComponent,
    CustomerAddComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ customers: CustomerReducer }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
