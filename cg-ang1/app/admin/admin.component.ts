import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Login } from '../login';
import { MenuService } from '../menu.service';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  regForm: FormGroup;
  res: Restaurant = new Restaurant();
  restaurant: Restaurant[];
  constructor(private fb: FormBuilder,
              private restser:RestaurantService,
              private menuser: MenuService,
              private dialogref:MatDialogRef<AdminComponent>) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({

      restaurantname: ['', [Validators.required ]],
    })
    this.getAllRestaurantList();
  }

  getAllRestaurantList()
  {
    this.restser.getAllRestaurantlist().subscribe(data =>
      {
        this.restaurant = data;
      })
  }

  onAssign()
  {
    this.restser.getRestaurantName(this.regForm.value.restaurantname).subscribe( data =>
      {
        this.res = data;
      })
    
      this.menuser.getAllMenulist().subscribe( data =>
        {
          this.res.menu = data;
          this.restser.updateRestaurant(this.res).subscribe(data =>
            {
              console.log(data);
              this.onclose();
            });
         
        })
  
    // this.restser.updateRestaurant()
  }
  

  // onAssign()
  // {
  //   this.shedser.addshedule(this.track).subscribe( data => {
  //       if(data != null)
  //       {
  //         localStorage.removeItem('shedid');
  //         this.dialogref.close();
  //       }
  //   })
  // }

  onclose()
  {
    this.dialogref.close();
  }

}
