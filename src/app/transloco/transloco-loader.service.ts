import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);
  private readonly url = '/assets/i18n/';
  // private readonly prodUrl = './assets/i18n/';

  getTranslation(lang: string) {
    return this.http.get<Translation>(`${this.url}${lang}.json`);
  }
}
