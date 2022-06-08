import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePath } from 'src/enums/route.enum';
import { LoginComponent } from 'src/pages/login/login.component';
import { PageNotFoundComponent } from 'src/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: RoutePath.ROOT,
    redirectTo: RoutePath.LOGIN,
    pathMatch: 'full',
  },
  {
    path: RoutePath.LOGIN,
    component: LoginComponent,

    // can be added to login in the user if already loggedin depending on the different strategies
    // canActivate: [AuthGuard]
  },
  {
    path: RoutePath.PAGE_NOT_FOUND,
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: RoutePath.PAGE_NOT_FOUND,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
