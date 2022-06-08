import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AlertType } from 'src/enums/alert-type.enum';
import { LoginService } from 'src/services/login/login.service';
import { CommonService } from 'src/shared/common.service';
import { CustomSnackbarService } from 'src/shared/custom-snackbar.service';
import * as LoginConstants from './login.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  public isLoading = false;

  public LOGIN_MSG = LoginConstants.LOGIN_MSG;
  public LOGIN_FIELDS_LABEL = LoginConstants.LOGIN_FIELDS_LABEL;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _snackBarService: CustomSnackbarService,
    private _commonService: CommonService
  ) {
    this.LOGIN_MSG.USERNAME_MISSING_MSG;
  }

  ngOnInit(): void {
    this.loginFormGroup = this._formBuilder.group({
      userName: new FormControl('', [Validators.required]),
    });

    this._commonService.isOverlayLoaderActive.subscribe(
      (isLoading: boolean) => (this.isLoading = isLoading)
    );
  }

  public login = () => {
    const userName: string = this.handleLoginForm();

    if (userName?.length)
      this._loginService
        .loginSuccess(userName)
        .subscribe((response: Response) => {
          console.log(response);
          this._commonService.isOverlayLoaderActive.next(false);
          this._snackBarService.selectSnackBar('Success', AlertType.SUCCESS);
        });
  };

  public fail = () => {
    const userName: string = this.handleLoginForm();

    if (userName?.length) {
      this._loginService.loginFail(userName).subscribe((response: Response) => {
        this._commonService.isOverlayLoaderActive.next(false);
        this._snackBarService.selectSnackBar('Success', AlertType.SUCCESS);
      });
    }
  };

  public isInputFieldsEmpty = (formControl: string): boolean => {
    return (
      this.loginFormGroup.controls[formControl].hasError('required') ||
      this.loginFormGroup.controls[formControl].pristine
    );
  };

  private handleLoginForm = (): string | any => {
    if (!this.loginFormGroup.valid) {
      this.loginFormGroup.markAllAsTouched();
      this._snackBarService.selectSnackBar(
        this.LOGIN_MSG.FIELDS_MISSING_MSG,
        AlertType.WARNING
      );
      return;
    }

    this._commonService.isOverlayLoaderActive.next(true);
    let userName: string = this.loginFormGroup.controls['userName'].value;
    return userName.trim();
  };
}
