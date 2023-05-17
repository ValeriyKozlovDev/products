import { createFeature, createReducer, on } from '@ngrx/store';

import { changeAccessFlag, setLoading, setUserLogin } from './auth.actions';
import { IAuthInitialState } from './interfaces';

export const auth = 'auth';

export const authInitialState: IAuthInitialState = {
  loginAgain: false,
  loading: false,
  userLogin: ''
};

export const authReducer = createReducer(
  authInitialState,
  on(changeAccessFlag, (state, action) => ({
    ...state,
    loginAgain: action.data
  })),
  on(setLoading, (state, action) => ({
    ...state,
    loading: action.data
  })),
  on(setUserLogin, (state, action) => ({
    ...state,
    userLogin: action.data
  }))
)
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
  )
},
)






