// import { Directive, Input, OnInit } from '@angular/core';
// import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
// import { VALIDATION_ERROR_MESSAGES } from '../../auth/error-handle/error-token';

// @Directive({
//   selector: '[customValidator]',
//   providers: [
//     {
//       provide: NG_VALIDATORS,
//       useExisting: CustomValidatorDirective,
//       multi: true,
//     },
//   ],
// })
// export class CustomValidatorDirective implements Validator, OnInit {
//   @Input('customValidator') validation: string;

//   constructor(private validationErrorMessages: any) { }

//   ngOnInit() {
//     console.log(this.validationErrorMessages); // Виводимо повідомлення
//   }
// }
