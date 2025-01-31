import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellSidenavComponent } from './shell-sidenav.component';
import { defaultStoreProvider } from '@state-adapt/angular';
import { ActivatedRoute } from '@angular/router';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { getTranslocoTestingModule } from '@internalization/get-transloco-testing-module.function';
import { HeaderComponent } from '../header/header.component';
import { ShellSidenvStoreService } from './shell-sidenav-store/shell-sidenav.service';

describe('ShellSidenavComponent', () => {
  let component: ShellSidenavComponent;
  let fixture: ComponentFixture<ShellSidenavComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} },
  } as ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, getTranslocoTestingModule()],
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideAnimationsAsync(),
        defaultStoreProvider,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        ShellSidenvStoreService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture).toMatchSnapshot();
  });
});
