import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  displayedColumns: string[] = ['restaurantname','restaurantowner','edit','delete'];
  dataSource = new MatTableDataSource();

  constructor(private restser: RestaurantService, private route:Router ) { }

  ngOnInit(): void 
  {
    this.getAllRestaurantlist();
  }

  getAllRestaurantlist()
  {
    this.restser.getAllRestaurantlist().subscribe(res=>
      {
            this.dataSource.data=res;
      }); 
  }

  onEdit(id)
  {
    let i= id;
    return i;
  }

  onDelete(id)
  {
    var r = confirm("Confirm to delete the menu details!");
    if(r == true)
    {
      this.restser.deleteRestaurant(id).subscribe( data =>
        {
          this.getAllRestaurantlist();
        });
        this.restser.afterdelete();
    }
  }

}
