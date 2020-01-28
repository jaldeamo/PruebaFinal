import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[validaUsername]',
  providers: [{provide: NG_VALIDATORS,useExisting:ValidausernameDirective,multi:true}]
})
export class ValidausernameDirective implements Validator{
  validate(control:AbstractControl):import("@angular/forms").ValidationErrors {
    const username = <string>control.value;

    if (!username)
    {
      return;
    }
    
    if (username != username.toLowerCase())
    {
      return {'validaUserName' : {'message': 'El username debe ir entero en letras minúsculas'}}
    }
  }

  constructor() { }

}
