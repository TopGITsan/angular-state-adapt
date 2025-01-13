import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/ui/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { defaultStoreProvider } from '@state-adapt/angular';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideAnimationsAsync(),
        defaultStoreProvider,
      ],
      imports: [AppComponent, HeaderComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-state-adapt' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-state-adapt');
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(AppComponent);

    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, angular-state-adapt',
    );
  });
});
