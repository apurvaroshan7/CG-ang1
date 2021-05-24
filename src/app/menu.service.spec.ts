import { TestBed } from '@angular/core/testing';
import { MenuService } from './menu.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Data } from '@angular/router';

describe('MenuService', () => {
  let service: MenuService;
  let RestaurantUrl = 'http://localhost:4200/api/Menu';
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(MenuService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllMenulist with correct URL', () => {​​​​​
    
    service.getAllMenulist().subscribe();
    const req = httpTestingController.expectOne('/api/Menu');
    req.flush([
       
    ]);
    httpTestingController.verify();
  }​​​​​);

  it('should call getMenu with correct URL', () => {​​​​​
    let name ="niha";
    service.getMenu(name).subscribe();
    const req = httpTestingController.expectOne('/api/Menu');
    req.flush([
       
    ]);
    httpTestingController.verify();
  }​​​​​);

  

  it('should call addMenuList with correct URL', () => {​​​​​
    let name ="niha";
    service.addMenuList(name).subscribe();
    const req = httpTestingController.expectOne('/api/Menu');
    req.flush([
       
    ]);
    httpTestingController.verify();
  }​​​​​);

  it('should call updateMenu with correct URL', () => {​​​​​
    const testData: Data = {id: 1,name: 'Test Data'};
    service.updateMenu(testData).subscribe();
    const req = httpTestingController.expectOne('/api/Menu/'+testData.id);
    req.flush([
       
    ]);
    httpTestingController.verify();
  }​​​​​);

  it('should call deleteMenu with correct URL', () => {​​​​​
    let id = 2;
    service.deleteMenu(id).subscribe();
    const req = httpTestingController.expectOne('/api/Menu/'+id);
    req.flush([
       
    ]);
    httpTestingController.verify();
  }​​​​​);
});
