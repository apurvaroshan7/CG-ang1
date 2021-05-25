import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuComponent } from './edit-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditMenuComponent', () => {
  let component: EditMenuComponent;
  let fixture: ComponentFixture<EditMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ EditMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method getMenu should be called', () => {
    const spy = spyOn(component, 'getMenu');
    let id =2;
    component.getMenu(id);
    expect(component).toBeDefined();
    expect(spy);
  });

  it('method onEdit should be called', () => {
    const spy = spyOn(component, 'onEdit');
    component.onEdit();
    expect(component).toBeDefined();
    expect(spy);
  });
});
