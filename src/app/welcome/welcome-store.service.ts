import { Injectable } from '@angular/core';
import { Lang } from '@internalization/lang.types';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WelcomeStoreService {
  readonly language = new BehaviorSubject<Lang | null>(null);
  readonly selectedLanguage$ = this.language.asObservable();
}
