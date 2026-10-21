import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseofhorrersComponent } from './houseofhorrers.component';

describe('HouseofhorrersComponent', () => {
  let component: HouseofhorrersComponent;
  let fixture: ComponentFixture<HouseofhorrersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseofhorrersComponent]
    });
    fixture = TestBed.createComponent(HouseofhorrersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
