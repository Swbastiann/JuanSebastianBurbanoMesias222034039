import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherFormComponent } from './other-form.component';

describe('OtherFormComponent', () => {
  let component: OtherFormComponent;
  let fixture: ComponentFixture<OtherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
