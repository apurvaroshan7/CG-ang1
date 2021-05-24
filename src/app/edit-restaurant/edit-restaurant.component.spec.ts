import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestaurantComponent } from './edit-restaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditRestaurantComponent', () => {
  let component: EditRestaurantComponent;
  let fixture: ComponentFixture<EditRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ EditRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method onEdit should be called', () => {
    const spy = spyOn(component, 'onEdit');
    component.onEdit();
    expect(component).toBeDefined();
    expect(spy);
  });


  it('method getRestaurant should be called', () => {
    const spy = spyOn(component, 'getRestaurant');
    let id =2;
    component.getRestaurant(id);
    expect(component).toBeDefined();
    expect(spy);
  });
  
});
