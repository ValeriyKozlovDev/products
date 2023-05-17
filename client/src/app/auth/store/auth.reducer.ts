import { createFeature, createReducer, on } from '@ngrx/store';

import { changeAccessFlag, login, setLoading, setUserLogin } from './auth.actions';
import { IAuthInitialState } from './interfaces';

export const auth = 'auth';

export const authInitialState: IAuthInitialState = {
  loginAgain: false,
  loading: false,
  userLogin: ''
};

export const AuthFeature = createFeature({
  name: auth,
  reducer: createReducer(
    authInitialState,
    on(changeAccessFlag, (state: IAuthInitialState, { data }) => ({
      ...state,
      loginAgain: data
    })),
    on(setLoading, (state: IAuthInitialState, { data }) => ({
      ...state,
      loading: data
    })),
    on(setUserLogin, (state: IAuthInitialState, { data }) => ({
      ...state,
      userLogin: data
    })),
    on(login, (state: IAuthInitialState, { data }) => ({
      ...state,
      loading: true
    })),
  )
})






