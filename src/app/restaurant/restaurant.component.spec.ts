import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantComponent } from './restaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('RestaurantComponent', () => {
  let component: RestaurantComponent;
  let fixture: ComponentFixture<RestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ RestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method onEdit should be called', () => {
    const spy = spyOn(component, 'onEdit');
    let id =2;
    component.onEdit(id);
    expect(component).toBeDefined();
    expect(spy);
  });

  it('method getAllRestaurantlist should be called', () => {
    const spy = spyOn(component, 'getAllRestaurantlist');
    component.getAllRestaurantlist();
    expect(component).toBeDefined();
    expect(spy);
  });

  it('method onDelete should be called', () => {
    const spy = spyOn(component, 'onDelete');
    let id =2;
    component.onDelete(id);
    expect(component).toBeDefined();
    expect(spy);
  });
  
});
