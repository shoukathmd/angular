import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTicketingComponent } from './edit-ticketing.component';

describe('EditTicketingComponent', () => {
  let component: EditTicketingComponent;
  let fixture: ComponentFixture<EditTicketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTicketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTicketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
