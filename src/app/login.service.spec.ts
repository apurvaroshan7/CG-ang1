import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Data } from '@angular/router';

describe('LoginService', () => {
  let service: LoginService;
  let RestaurantUrl = 'http://localhost:4200/api/Login';
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
    service = TestBed.inject(LoginService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllUserlist with correct URL', () => {​​​​​
    
    service.getAllUserlist().subscribe();
    const req = httpTestingController.expectOne('/api/Login');
    req.flush([
       
    ]);
    httpTestingController.verify();
  }​​​​​);

  it('should call getUser with correct URL', () => {​​​​​
    const testData: Data = {id: 1,name: 'Test Data'};
    service.getUser(testData).subscribe();
    const req = httpTestingController.expectOne('/api/Login');
    req.flush([
       
    ]);
    httpTestingController.verify();
  }​​​​​);

  

  it('should call addUserList with correct URL', () => {​​​​​
    let name ="niha";
    service.addUserList(name).subscribe();
    const req = httpTestingController.expectOne('/api/Login');
    req.flush([
       
    ]);
    httpTestingController.verify();
  }​​​​​);

});
