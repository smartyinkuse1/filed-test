import { Action } from '@ngrx/store';
import { PersonalDetails } from '../personal-details.model';

export enum PersonalDetailsActionTypes {
  LOAD_PERSONALDETAILS = '[PersonalDetails] Load PersonalDetails',
  LOAD_PERSONALDETAILS_SUCCESS = '[PersonalDetails] Load PersonalDetails Success',
  LOAD_PERSONALDETAILS_FAIL = '[PersonalDetails] Load PersonalDetails Fail',
  CREATE_PERSONALDETAILS = "[PersonalDetails] Create PersonalDetails",
  CREATE_PERSONALDETAILS_SUCCESS = "[PersonalDetails] Create PersonalDetails Success",
  CREATE_PERSONALDETAILS_FAIL = "[PersonalDetails] Create PersonalDetails Fail",
}
export class LoadPersonalDetailss implements Action {
  readonly type = PersonalDetailsActionTypes.LOAD_PERSONALDETAILS
}
export class LoadPersonalDetailssSuccess implements Action {
  readonly type = PersonalDetailsActionTypes.LOAD_PERSONALDETAILS_SUCCESS
  constructor(public payload:PersonalDetails[]) {}
}
export class LoadPersonalDetailssFail implements Action {
  readonly type = PersonalDetailsActionTypes.LOAD_PERSONALDETAILS_FAIL
  constructor(public payload: string) {}
}
export class CreatePersonalDetails implements Action {
  readonly type = PersonalDetailsActionTypes.CREATE_PERSONALDETAILS;

  constructor(public payload: PersonalDetails) {}
}

export class CreatePersonalDetailsSuccess implements Action {
  readonly type = PersonalDetailsActionTypes.CREATE_PERSONALDETAILS_SUCCESS;

  constructor(public payload: PersonalDetails) {}
}

export class CreatePersonalDetailsFail implements Action {
  readonly type = PersonalDetailsActionTypes.CREATE_PERSONALDETAILS_FAIL;

  constructor(public payload: string) {}
}

export type Actions = LoadPersonalDetailss | LoadPersonalDetailssSuccess | LoadPersonalDetailssFail | CreatePersonalDetails | CreatePersonalDetailsSuccess | CreatePersonalDetailsFail
