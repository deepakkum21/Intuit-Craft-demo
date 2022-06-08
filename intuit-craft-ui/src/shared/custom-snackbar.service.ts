import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from 'src/components/custom-snackbar/custom-snackbar.component';
import { AlertType } from 'src/enums/alert-type.enum';

const PANEL_CLASS = {
  WARNING: 'warning-snackbar',
  SUCCESS: 'success-snackbar',
  INFO: 'info-snackbar',
  ERROR: 'error-snackbar',
};

@Injectable({
  providedIn: 'root',
})
export class CustomSnackbarService {
  DISMISS_BUTTON_LABEL = 'Dismiss';
  constructor(private _snackBar: MatSnackBar) {}

  // this fnc will open up the snackbar with custom setting
  public openSnackBar = (
    message: string,
    type?: string,
    action?: string,
    snackBarConfig?: any
  ) => {
    let config = {
      data: {
        message,
        action,
        type,
      },
      verticalPosition: 'top',
      horizontalPosition: 'center',
      ...snackBarConfig,
    };

    return this._snackBar.openFromComponent(CustomSnackbarComponent, config);
  };

  public closeSnackBar = () => {
    this._snackBar.dismiss();
  };

  public selectSnackBar = (
    messageContent: string,
    type: string,
    duration?: number,
    actionName?: string
  ): void => {
    const snackBarConfig: MatSnackBarConfig<any> = {};

    switch (type) {
      case AlertType.SUCCESS:
        snackBarConfig.panelClass = PANEL_CLASS.SUCCESS;
        break;
      case AlertType.WARNING:
        snackBarConfig.panelClass = PANEL_CLASS.WARNING;
        break;
      case AlertType.INFO:
        snackBarConfig.panelClass = PANEL_CLASS.INFO;
        break;
      case AlertType.ERROR:
        snackBarConfig.panelClass = PANEL_CLASS.ERROR;
        break;
    }

    if (actionName === undefined || actionName?.length === 0)
      actionName = this.DISMISS_BUTTON_LABEL;

    snackBarConfig.duration = duration ? duration : 3000;

    this.openSnackBar(messageContent, type, actionName, snackBarConfig);
  };
}
