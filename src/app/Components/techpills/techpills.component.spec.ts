import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechpillsComponent } from './techpills.component';

describe('TechpillsComponent', () => {
  let component: TechpillsComponent;
  let fixture: ComponentFixture<TechpillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechpillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechpillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
