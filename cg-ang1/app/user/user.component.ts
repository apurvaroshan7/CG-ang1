import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../Menu';
import { MenuComponent } from '../menu/menu.component';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  restaurant: Restaurant = new Restaurant();
  restaurants: Restaurant[];
  menu: Menu[];
  constructor(private route: Router,
              private restser: RestaurantService) { }
  check:boolean = false;
  ngOnInit(): void {
    this.getAllRestaurant();
  }

  getAllRestaurant()
  {
      this.restser.getAllRestaurantlist().subscribe(data =>
        {
          this.restaurants = data;
        });
  }

  onRestaurant(id)
  {
    this.restser.getRestaurantitem(id).subscribe(data => {
      this.check =true;
      this.menu = data.menu;
      console.log(this.restaurant);
    })
  }

  onPlaceorder()
  {
    this.route.navigateByUrl('confirm');
  }

  

}
