import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public isOverlayLoaderActive = new BehaviorSubject<boolean>(false);

  constructor() {}
}
