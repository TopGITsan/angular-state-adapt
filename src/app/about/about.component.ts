import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ExternalLinkDirective } from '@shared/directives';
import { ContentComponent } from '@shared/ui/content/content.component';

@Component({
  selector: 'app-about',
  imports: [ContentComponent, ExternalLinkDirective, MatButtonModule],
  template: `
    <app-content>
      <p>
        <a mat-button href="https://angular.dev/">
          {{ title }}
        </a>
      </p>
      <p>
        <a mat-button href="https://state-adapt.github.io/angular">
          {{ subtitle }}
        </a>
      </p>
      <p>
        <a mat-button href="https://material.angular.io/">
          {{ components }}
        </a>
      </p>
      <p>
        <a mat-button href="https://tailwindcss.com/">
          {{ styles }}
        </a>
      </p>
    </app-content>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly title = 'Build with angular';
  readonly subtitle = 'StateAdapt: Clean, Modern State Management';
  readonly styles =
    'Tailwind: A utility-first CSS framework packed with classes';
  readonly components =
    'Angular Material : Material Design components for Angular';
}
