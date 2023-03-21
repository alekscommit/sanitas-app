import { Component } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  email = '';
  password = '';
  remember = false;
  showFormErrors = false;
  emailErrorMessage = '';
  passwordErrorMessage = '';

  public onSubmit(form: any) {
    if (this.validateForm(form)) {
      console.log('OK');
    } else {
      this.showFormErrors = true;
    }
  }

  private validateForm(form: any): boolean {
    this.emailErrorMessage = '';
    this.passwordErrorMessage = '';
    let validate = true;
    if (form.controls.email.errors && form.controls.email.errors.required) {
      this.emailErrorMessage = 'El campo es obligatorio';
      validate = false;
    } else if (form.controls.email.errors && form.controls.email.errors.email) {
      this.emailErrorMessage = 'El email introducido no es válido';
      validate = false;
    }
    if (form.controls.password.errors && form.controls.password.errors.required) {
      this.passwordErrorMessage = 'El campo es obligatorio';
      validate = false;
    } else if (form.controls.password.value.length < 5) {
      this.passwordErrorMessage = 'La contraseña tiene que ser mínimo de 5 caracteres'
      validate = false;
    }
    return validate;
  }
}
