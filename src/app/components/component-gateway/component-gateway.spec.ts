import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGateway } from './component-gateway';

describe('ComponentGateway', () => {
  let component: ComponentGateway;
  let fixture: ComponentFixture<ComponentGateway>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentGateway]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentGateway);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
