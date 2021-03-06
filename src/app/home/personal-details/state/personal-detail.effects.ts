import { Injectable } from '@angular/core';

import { Actions, Effect, ofType} from '@ngrx/effects'
import { Action } from '@ngrx/store';

import { Observable, of}  from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { PaymentService } from '../../../services/payment.service'
import * as personalDetailsActions from './personal-detail.action';
import { PersonalDetails } from '../personal-details.model'

@Injectable()
export class PersonalDetailsEffect {
  constructor(
    private actions$: Actions,
    private paymentService: PaymentService
  ) {}
  @Effect()
  loadPersonalDetails$: Observable<Action> = this.actions$.pipe(
    ofType<personalDetailsActions.LoadPersonalDetailss>(
      personalDetailsActions.PersonalDetailsActionTypes.LOAD_PERSONALDETAILS
    ),
    mergeMap((action: personalDetailsActions.LoadPersonalDetailss) =>
      this.paymentService.getPersonalDetails().pipe(
        map(
          (personalDetails: PersonalDetails[]) =>
            new personalDetailsActions.LoadPersonalDetailssSuccess(personalDetails)
        ),
        catchError(err => of(new personalDetailsActions.LoadPersonalDetailssFail(err)))
      )
    )
  );

  @Effect()
  createPersonalDetails$: Observable<Action> = this.actions$.pipe(
    ofType<personalDetailsActions.CreatePersonalDetails>(
      personalDetailsActions.PersonalDetailsActionTypes.CREATE_PERSONALDETAILS
    ),
    map((action: personalDetailsActions.CreatePersonalDetails) => action.payload),
    mergeMap((details: PersonalDetails) =>
      this.paymentService.createPersonalDetails(details).pipe(
        map(
          (newPersonalDetails: PersonalDetails) =>
            new personalDetailsActions.CreatePersonalDetailsSuccess(newPersonalDetails)
        ),
        catchError(err => of(new personalDetailsActions.CreatePersonalDetailsFail(err)))
      )
    )
  );
}
