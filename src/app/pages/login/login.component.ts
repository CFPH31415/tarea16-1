import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from './email-validator.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.minLength(1),
          emailValidator()
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]
    })
  }

  get email() {
    return this.formLogin.get('email')!;
  }

  get password() {
    return this.formLogin.get('password')!;
  }


  public validate(): void {
    if (this.formLogin.invalid) {
      for (const control of Object.keys(this.formLogin.controls)) {
        this.formLogin.controls[control].markAsTouched();
      }
      return;
    }
  }
  send(): any {
    console.info('DATOS:', this.formLogin.value);
  }

}
