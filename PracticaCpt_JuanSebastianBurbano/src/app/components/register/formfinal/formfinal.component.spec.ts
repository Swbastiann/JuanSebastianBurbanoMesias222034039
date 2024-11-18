import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfinalComponent } from './formfinal.component';

describe('FormfinalComponent', () => {
  let component: FormfinalComponent;
  let fixture: ComponentFixture<FormfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormfinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
