import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatDialogModule,
        MatSelectModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }
     ],
      declarations: [ AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method getAllRestaurantList should be called', () => {
    const spy = spyOn(component, 'getAllRestaurantList');
    component.getAllRestaurantList();
    expect(component).toBeDefined();
    expect(spy);
  });

  it('method onAssign should be called', () => {
    const spy = spyOn(component, 'onAssign');
    component.onAssign();
    expect(component).toBeDefined();
    expect(spy);
  });

  it('method onclose should be called', () => {
    const spy = spyOn(component, 'onclose');
    component.onclose();
    expect(component).toBeDefined();
    expect(spy);
  });

});
