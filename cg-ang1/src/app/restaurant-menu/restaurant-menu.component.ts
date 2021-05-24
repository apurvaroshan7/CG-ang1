import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MenuService } from '../menu.service';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {

  displayedColumns: string[] = ['item','price'];
  dataSource = new MatTableDataSource();
  constructor(private menuser:RestaurantService) { }

  ngOnInit(): void {

    this.getAllMenulist();
  }

  getAllMenulist()
  {
    let name = localStorage.getItem('resname');
    this.menuser.getRestaurantName(name).subscribe(res=>
    {
          this.dataSource.data=res.menu;
    });
  }

}
