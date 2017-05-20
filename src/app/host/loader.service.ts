import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {BootItem} from "./boot-item";

@Injectable()
export class LoaderService {

  private _bootItem: BehaviorSubject<BootItem> = new BehaviorSubject<BootItem>(null);
  public bootItem: Observable<BootItem> = this._bootItem.asObservable();

  loadBootItem(bootItem: BootItem) {
    this._bootItem.next(bootItem);
  }

}
