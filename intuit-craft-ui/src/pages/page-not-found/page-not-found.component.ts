import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'src/enums/route.enum';

const pageNotFound = {
  header: '404',
  content: 'The page you are looking for, is beyond our reach.',
};

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  pageNotFound = pageNotFound;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  public backToHome = (): void => {
    // navigating to home page
    this._router.navigate([Route.LOGIN]);
  };
}
