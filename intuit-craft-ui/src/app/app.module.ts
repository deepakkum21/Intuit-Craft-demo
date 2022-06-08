import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from 'src/pages/login/login.component';
import { InterceptorProviders } from 'src/interceptors/interceptorProvider';
import { PageNotFoundComponent } from 'src/pages/page-not-found/page-not-found.component';
import { CustomSnackbarComponent } from 'src/components/custom-snackbar/custom-snackbar.component';
import { CustomSpinnerComponent } from 'src/components/custom-spinner/custom-spinner.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    CustomSnackbarComponent,
    CustomSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  providers: [InterceptorProviders, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
