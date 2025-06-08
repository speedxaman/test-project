import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationGroupComponent } from './application-group.component';

describe('ApplicationGroupComponent', () => {
  let component: ApplicationGroupComponent;
  let fixture: ComponentFixture<ApplicationGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
