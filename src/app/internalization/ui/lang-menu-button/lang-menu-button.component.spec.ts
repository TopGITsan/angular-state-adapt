import { ComponentFixture, TestBed } from '@angular/core/testing';

import { getTranslocoTestingModule } from '@internalization/get-transloco-testing-module.function';
import { LangMenuButtonComponent } from './lang-menu-button.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { defaultStoreProvider } from '@state-adapt/angular';

describe('LangMenuButtonComponent', () => {
  let component: LangMenuButtonComponent;
  let fixture: ComponentFixture<LangMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangMenuButtonComponent, getTranslocoTestingModule()],
      providers: [
        defaultStoreProvider,
        provideExperimentalZonelessChangeDetection(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LangMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
