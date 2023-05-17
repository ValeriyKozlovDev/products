import { createAction, props } from '@ngrx/store';

import { FormActions } from './auth.action.enum';

export const changeAccessFlag = createAction(
  FormActions.CHANGE_ACCESS_FLAG,
  props<{ data: boolean }>()
);

export const setLoading = createAction(
  FormActions.SET_LOADING,
  props<{ data: boolean }>()
);

export const setUserLogin = createAction(
  FormActions.SET_USER_LOGIN,
  props<{ data: string }>()
)

