import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, map } from'rxjs/operators';
import { Menu } from './Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  private MenuUrl = '/api/Menu';

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  getAllMenulist(): Observable<Menu[]>
  {
    return this.http.get<Menu[]>(`${this.MenuUrl}`);
  }

  addMenuList(input) : Observable<Menu>
  {
    return this.http.post<Menu>(`${this.MenuUrl}`,input);
  }

  getMenu(id)
  {
    return this.getAllMenulist()
    .pipe(
      map((cus: Menu[]) => cus.find(items => items.id == id))
    );
  }
  updateMenu(input):Observable<Menu>
  {
    return this.http.put<Menu>(`${this.MenuUrl}`+`/`+`${input.id}`,input);
  }
  deleteMenu(input)
  {
    return this.http.delete(`${this.MenuUrl}`+`/`+`${input}`);
  }
  afterdelete()
  {
    this.getLoggedInName.emit();
  }

}
