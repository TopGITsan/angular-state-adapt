import { Observable } from 'rxjs';
import { Class } from './class.type';

export interface Listener<T> {
  on: (event: Class<T>) => Observable<T>;
}
