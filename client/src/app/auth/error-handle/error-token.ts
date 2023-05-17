import { InjectionToken } from '@angular/core';

export const VALIDATION_ERROR_MESSAGES = new InjectionToken<any>('validationErrorMessages');

export const errorMessages = {
  required: 'this field is required.',
  minlength: 'minimal length 6 symbols.',
  email: 'Enter a valid email.',
};
