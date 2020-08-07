import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorConfigComponent } from './generator-config.component';

describe('GeneratorConfigComponent', () => {
  let component: GeneratorConfigComponent;
  let fixture: ComponentFixture<GeneratorConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
