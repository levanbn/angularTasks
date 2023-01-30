import { ComponentFixture, TestBed } from '@angular/core/testing';

import { informationComponent } from './information.component';

describe('InformationComponent', () => {
  let component: informationComponent;
  let fixture: ComponentFixture<informationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ informationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(informationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
