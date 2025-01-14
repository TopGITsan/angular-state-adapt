import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeIconButtonComponent } from './theme-icon-button.component';
import { defaultStoreProvider } from '@state-adapt/angular';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ThemeIconButtonComponent', () => {
  let component: ThemeIconButtonComponent;
  let fixture: ComponentFixture<ThemeIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeIconButtonComponent],
      providers: [
        defaultStoreProvider,
        provideExperimentalZonelessChangeDetection(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
