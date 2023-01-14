import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  loading = false;
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  get username() {
    return this.authForm.get('username');
  }

  get password() {
    return this.authForm.get('password');
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.signIn(this.authForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
        this.loading = false;
      },
      error: ({error}) => {
        if (error.username || error.password) {
          this.authForm.setErrors({credentials: true});
        } else {
          this.authForm.setErrors({unknownError: true});
        }
        this.loading = false;
      }
    });

  }

}
