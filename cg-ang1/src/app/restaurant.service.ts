import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private RestaurantUrl = '/api/Restaurant';

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  getAllRestaurantlist(): Observable<Restaurant[]>
  {
    return this.http.get<Restaurant[]>(`${this.RestaurantUrl}`);
  }

  addRestaurantList(input) : Observable<Restaurant>
  {
    return this.http.post<Restaurant>(`${this.RestaurantUrl}`,input);
  }

  getRestaurantitem(id)
  {
    return this.getAllRestaurantlist()
    .pipe(
      map((cus: Restaurant[]) => cus.find(items => items.id == id))
    );
  }

  getRestaurantName(name)
  {
    return this.getAllRestaurantlist()
    .pipe(
      map((cus: Restaurant[]) => cus.find(items => items.restaurantname == name))
    );
  }

  updateRestaurant(input):Observable<Restaurant>
  {
    return this.http.put<Restaurant>(`${this.RestaurantUrl}`+`/`+`${input.id}`,input);
  }

  deleteRestaurant(input)
  {
    return this.http.delete(`${this.RestaurantUrl}`+`/`+`${input}`);
  }
  
  afterdelete()
  {
    this.getLoggedInName.emit();
  }
}
