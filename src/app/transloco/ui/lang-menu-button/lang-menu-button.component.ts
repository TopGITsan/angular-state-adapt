import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { GlobalStoreService } from '@store/global-store.service';
import { langList } from '@transloco/lang.constants';
import { languageChange$ } from '@transloco/language.actions';

@Component({
  selector: 'app-lang-menu-button',
  imports: [MatMenuModule, MatButtonModule, MatIconModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <button
      mat-button
      [matMenuTriggerFor]="menu"
      aria-label="Language icon-button with a menu"
    >
      <mat-icon>arrow_drop_down</mat-icon>
      {{ selectedLanguage | async }}
    </button>
    <mat-menu #menu="matMenu" class="max-h-64">
      <!--By default, the menu content will be initialized even when the panel is closed. To defer initialization until the menu is open, the content can be provided as an ng-template with the matMenuContent attribute  -->
      <ng-template matMenuContent class="p-2">
        @for (lang of langList; track lang) {
          <button
            mat-menu-item
            attr.aria-label="button for language {{ lang }}"
            (click)="languageChange$.next(lang)"
          >
            {{ lang }}
          </button>
        }
      </ng-template>
    </mat-menu>
  `,
  styles: ``,
})
export class LangMenuButtonComponent {
  private readonly globalStore = inject(GlobalStoreService);
  readonly langList = langList;
  readonly selectedLanguage = this.globalStore.store.languageState$;
  readonly languageChange$ = languageChange$;
}
