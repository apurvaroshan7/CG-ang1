import { TestBed } from '@angular/core/testing';
import { RestaurantService } from './restaurant.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Data } from '@angular/router';

describe('RestaurantService', () => {
  
  let service: RestaurantService;
  let RestaurantUrl = 'http://localhost:4200/api/Restaurant';
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
    service = TestBed.inject(RestaurantService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllRestaurantlist with correct URL', () => {​​​​​
    
    service.getAllRestaurantlist().subscribe();
    const req = httpTestingController.expectOne('/api/Restaurant');
    req.flush([
       
    ]);
    httpTestingController.verify();
  }​​​​​);

  it('should call getRestaurantName with correct URL', () => {​​​​​
    let name ="niha";
    service.getRestaurantName(name).subscribe();
    const req = httpTestingController.expectOne('/api/Restaurant');
    req.flush([
       
    ]);
    httpTestingController.verify();
  }​​​​​);

  it('should call getRestaurantitem with correct URL', () => {​​​​​
    let id = 2;
    service.getRestaurantitem(id).subscribe();
    const req = httpTestingController.expectOne('/api/Restaurant');
    req.flush([
       
    ]);
    httpTestingController.verify();
  }​​​​​);

  it('should call addRestaurantList with correct URL', () => {​​​​​
    let name ="niha";
    service.addRestaurantList(name).subscribe();
    const req = httpTestingController.expectOne('/api/Restaurant');
    req.flush([
       
    ]);
    httpTestingController.verify();
  }​​​​​);

  it('should call updateRestaurant with correct URL', () => {​​​​​
    const testData: Data = {id: 1,name: 'Test Data'};
    service.updateRestaurant(testData).subscribe();
    const req = httpTestingController.expectOne('/api/Restaurant/'+testData.id);
    req.flush([
       
    ]);
    httpTestingController.verify();
  }​​​​​);

  it('should call deleteRestaurant with correct URL', () => {​​​​​
    let id = 2;
    service.deleteRestaurant(id).subscribe();
    const req = httpTestingController.expectOne('/api/Restaurant/'+id);
    req.flush([
       
    ]);
    httpTestingController.verify();
  }​​​​​);

  

});
