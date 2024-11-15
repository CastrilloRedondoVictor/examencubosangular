import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuboComponentComponent } from './cubo-component.component';

describe('CuboComponentComponent', () => {
  let component: CuboComponentComponent;
  let fixture: ComponentFixture<CuboComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuboComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuboComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
