import * as PersonalDetailsActions from './personal-detail.action';
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import * as fromRoot from "../../../state/app-state";
import { PersonalDetails } from '../personal-details.model';

export interface PersonalDetailsState extends EntityState<PersonalDetails> {
  selectedPersonalDetailsId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}
export interface AppState extends fromRoot.AppState {
  personalDetails: PersonalDetailsState;
}
export const personalDetailsAdapter: EntityAdapter<PersonalDetails> = createEntityAdapter<
  PersonalDetails
>();

export const defaultCard: PersonalDetailsState = {
  ids: [],
  entities: {},
  selectedPersonalDetailsId: null,
  loading: false,
  loaded: false,
  error: ""
};

export const initialState = personalDetailsAdapter.getInitialState(defaultCard);

export function personalDetailsReducer(
  state = initialState,
  action: PersonalDetailsActions.Actions
): PersonalDetailsState {
  switch (action.type) {
    case PersonalDetailsActions.PersonalDetailsActionTypes.LOAD_PERSONALDETAILS_SUCCESS: {
      return personalDetailsAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case PersonalDetailsActions.PersonalDetailsActionTypes.LOAD_PERSONALDETAILS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }
    case PersonalDetailsActions.PersonalDetailsActionTypes.CREATE_PERSONALDETAILS_SUCCESS: {
      return personalDetailsAdapter.addOne(action.payload, state);
    }
    case PersonalDetailsActions.PersonalDetailsActionTypes.CREATE_PERSONALDETAILS_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }


    default: {
      return state;
    }
  }
}

const getPersonalDetailsFeatureState = createFeatureSelector<PersonalDetailsState>(
  "personalDetails"
);

export const getpersonalDetails = createSelector(
  getPersonalDetailsFeatureState,
  personalDetailsAdapter.getSelectors().selectAll
);

export const getpersonalDetailsLoading = createSelector(
  getPersonalDetailsFeatureState,
  (state: PersonalDetailsState) => state.loading
);

export const getpersonalDetailsLoaded = createSelector(
  getPersonalDetailsFeatureState,
  (state: PersonalDetailsState) => state.loaded
);

export const getError = createSelector(
  getPersonalDetailsFeatureState,
  (state: PersonalDetailsState) => state.error
);

export const getCurrentPersonalDetailsId = createSelector(
  getPersonalDetailsFeatureState,
  (state: PersonalDetailsState) => state.selectedPersonalDetailsId
);
export const getCurrentPersonalDetails = createSelector(
  getPersonalDetailsFeatureState,
  getCurrentPersonalDetailsId,
  state => state.entities[state.selectedPersonalDetailsId]
);
