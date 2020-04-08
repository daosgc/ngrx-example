import { Action } from '@ngrx/store';

export enum CustomerActionTypes {
  ADD_CUSTOMER    = '[Customer] ADD_CUSTOMER',
  REMOVE_CUSTOMER = '[Customer] REMOVE_CUSTOMER',
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class CustomerAdd implements ActionEx {
  readonly type = CustomerActionTypes.ADD_CUSTOMER;
  constructor(public payload: any) {
  }
}

export class CustomerRemove implements ActionEx {
  readonly type = CustomerActionTypes.REMOVE_CUSTOMER;
  constructor(public payload: any) {
  }
}
