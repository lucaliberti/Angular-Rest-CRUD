import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdComponentComponent } from './get-by-id-component.component';

describe('GetByIdComponentComponent', () => {
  let component: GetByIdComponentComponent;
  let fixture: ComponentFixture<GetByIdComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetByIdComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
