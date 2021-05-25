import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method getAllRestaurant should be called', () => {
    const spy = spyOn(component, 'getAllRestaurant');
    component.getAllRestaurant();
    expect(component).toBeDefined();
    expect(spy);
  });

  it('method onRestaurant should be called', () => {
    const spy = spyOn(component, 'onRestaurant');
    let id =2;
    component.onRestaurant(id);
    expect(component).toBeDefined();
    expect(spy);
  });
  
});
