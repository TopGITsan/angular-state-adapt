import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangMenuButtonComponent } from './lang-menu-button.component';

describe('LangMenuButtonComponent', () => {
  let component: LangMenuButtonComponent;
  let fixture: ComponentFixture<LangMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangMenuButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
