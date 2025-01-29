import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRANSLOCO_SCOPE } from '@jsverse/transloco';
import { ContentComponent } from '@shared/ui/content/content.component';
import { getTranslocoTestingModule } from '@internalization/get-transloco-testing-module.function';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent, ContentComponent, getTranslocoTestingModule()],
      providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'about' }],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have the 'Build with angular' title`, () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Build with angular');
  });

  it(`should have the 'StateAdapt: Clean, Modern State Management' subtitle`, () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.componentInstance;
    expect(app.subtitle).toEqual('StateAdapt: Clean, Modern State Management');
  });

  it(`should have the 'Angular Material : Material Design components for Angular' subtitle`, () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.componentInstance;
    expect(app.components).toEqual(
      'Angular Material : Material Design components for Angular',
    );
  });

  it(`should have the 'Tailwind: A utility-first CSS framework packed with classes' subtitle`, () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.componentInstance;
    expect(app.styles).toEqual(
      'Tailwind: A utility-first CSS framework packed with classes',
    );
  });
});
