import { ComponentFixture, TestBed } from '@angular/core/testing';

import { getTranslocoTestingModule } from '@internalization/get-transloco-testing-module.function';
import { LangMenuButtonComponent } from './lang-menu-button.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { defaultStoreProvider } from '@state-adapt/angular';
import { provideApplicationBus } from '../../../event-hub/provide-application-bus.function';

describe('LangMenuButtonComponent', () => {
  let component: LangMenuButtonComponent;
  let fixture: ComponentFixture<LangMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangMenuButtonComponent, getTranslocoTestingModule()],
      providers: [
        defaultStoreProvider,
        provideExperimentalZonelessChangeDetection(),
        provideApplicationBus(),
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
