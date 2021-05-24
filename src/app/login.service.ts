import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private LoginUrl = '/api/Login';

  constructor(private http: HttpClient) { }

  getAllUserlist(): Observable<Login[]>
  {
    return this.http.get<Login[]>(`${this.LoginUrl}`);
  }

  addUserList(input) : Observable<Login>
  {
    console.log(input);
    return this.http.post<Login>(`${this.LoginUrl}`,input);
  }

  checkuser(name) 
  {
    return this.getAllUserlist()
    .pipe(
      map((cus: Login[]) => cus.find(items => items.username == name))
    );
  }

  getUser(log)
  {
    return this.getAllUserlist()
    .pipe(
      map((cus: Login[]) => cus.find(items => items.username == log.username && items.password == log.password))
    );
  }
}
