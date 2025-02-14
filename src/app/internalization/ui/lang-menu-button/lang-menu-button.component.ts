import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LangStoreService } from '@internalization/lang-store/lang-store.service';
import { langList } from '@internalization/lang.constants';
import { provideTranslocoScope, TranslocoDirective } from '@jsverse/transloco';
import { inlineLoader } from '@shared/i18n/inline-loader.function';
import { languageChange$ } from '../../lang-store/lang.actions';

@Component({
  selector: 'app-lang-menu-button',
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
    TitleCasePipe,
    TranslocoDirective,
  ],
  providers: [
    provideTranslocoScope({
      scope: 'lang',
      loader: inlineLoader(
        (lang: string, folder: string) =>
          import(`../../${folder}/${lang}.json`),
      ),
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <ng-container *transloco="let t; prefix: 'lang'">
      @let selectedLanguage = (selectedLanguage$ | async) ?? '';
      <button
        mat-button
        [matMenuTriggerFor]="menu"
        aria-label="Language icon-button with a menu"
      >
        <mat-icon>arrow_drop_down</mat-icon>
        {{ t(selectedLanguage) }}
      </button>
    </ng-container>

    <mat-menu #menu="matMenu" class="max-h-64">
      <!--By default, the menu content will be initialized even when the panel is closed. To defer initialization until the menu is open, the content can be provided as an ng-template with the matMenuContent attribute  -->
      <ng-template matMenuContent class="p-2">
        @for (lang of langList; track lang) {
          <ng-container *transloco="let t; prefix: 'lang'; lang: lang+'|static';">
            <button
              mat-menu-item
              attr.aria-label="button for language {{ t(lang) | titlecase }}"
              (click)="languageChange$.next(lang)"
            >
              {{ t(lang) | titlecase }}
            </button>
          </ng-container>
        }
      </ng-template>
    </mat-menu>
  `,
  styles: ``,
})
export class LangMenuButtonComponent {
  private readonly languageStore = inject(LangStoreService);
  readonly langList = langList;
  readonly selectedLanguage$ = this.languageStore.store.lang$;
  readonly languageChange$ = languageChange$;
}
