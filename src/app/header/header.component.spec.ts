import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ExternalLinkDirective } from '@shared/directives';
import { ThemeIconButtonComponent } from '@theme/ui/theme-icon-button/theme-icon-button.component';
import { defaultStoreProvider } from '@state-adapt/angular';
import { getTranslocoTestingModule } from '@internalization/get-transloco-testing-module.function';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        defaultStoreProvider,
      ],
      imports: [
        HeaderComponent,
        ExternalLinkDirective,
        ThemeIconButtonComponent,
        getTranslocoTestingModule(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
