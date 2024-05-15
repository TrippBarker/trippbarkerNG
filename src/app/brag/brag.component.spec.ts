import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BragComponent } from './brag.component';

describe('BragComponent', () => {
  let component: BragComponent;
  let fixture: ComponentFixture<BragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BragComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
