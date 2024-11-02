import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherFormCbComponent } from './other-form-cb.component';

describe('OtherFormCbComponent', () => {
  let component: OtherFormCbComponent;
  let fixture: ComponentFixture<OtherFormCbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherFormCbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherFormCbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
