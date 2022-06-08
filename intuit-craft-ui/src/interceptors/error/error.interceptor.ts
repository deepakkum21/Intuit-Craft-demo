import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomSnackbarService } from 'src/shared/custom-snackbar.service';
import { AlertType } from 'src/enums/alert-type.enum';
import { CommonService } from 'src/shared/common.service';

const ERRORS = {
  0: 'Server not reachable, please contact administrator',
  500: 'Something went wrong, please try later',
  400: 'Bad Request',
  401: 'Incorrect username or password',
  403: 'Access Denied',
  404: 'Request cannot be processed',
};

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private _snackBarService: CustomSnackbarService,
    private _commonService: CommonService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage = this.setError(error);
        this._snackBarService.selectSnackBar(errorMessage, AlertType.ERROR);
        this._commonService.isOverlayLoaderActive.next(false);
        return throwError(errorMessage);
      })
    );
  }

  setError = (error: HttpErrorResponse): string => {
    let errorMessage = ERRORS[0];

    if (error.error instanceof ErrorEvent) {
      // client side error
      errorMessage = error.error.message;
    }

    // server side error
    if (error.status !== 0) {
      switch (error.status) {
        case 400:
          errorMessage = ERRORS[400];
          break;
        case 401:
          errorMessage = ERRORS[401];
          break;
        case 403:
          errorMessage = ERRORS[403];
          break;
        case 404:
          errorMessage = ERRORS[404];
          break;
        case 500:
          errorMessage = ERRORS[500];
          break;
      }
    }
    return errorMessage;
  };
}
