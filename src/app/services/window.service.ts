import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  private props = new Map<keyof Window, any>();
  private propsSubject = new BehaviorSubject(this.props);

  constructor() { }

  set(key: keyof Window, value: any) {
    this.props.set(key, value);
    this.propsSubject.next(this.props);
  }

  getValue(key: keyof Window) {
    return this.props.get(key);
  }

  getValueAsObservable(key: keyof Window) {
    return this.propsSubject.asObservable().pipe(
      map(values=> values.get(key))
    )
  }
}
