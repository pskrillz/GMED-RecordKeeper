import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesshubComponent } from './accesshub.component';

describe('AccesshubComponent', () => {
  let component: AccesshubComponent;
  let fixture: ComponentFixture<AccesshubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesshubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesshubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
