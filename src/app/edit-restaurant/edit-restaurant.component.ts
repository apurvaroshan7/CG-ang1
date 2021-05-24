import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  regForm: FormGroup;
  restaurant:Restaurant =new Restaurant();
  constructor(private fb: FormBuilder, 
    private restser: RestaurantService,
    private route: Router,
    private active: ActivatedRoute) 
  { 

  }

  ngOnInit(): void 
  {
    const param = this.active.snapshot.paramMap.get('id');
    this.regForm = this.fb.group({
      restaurantname: ['', [Validators.required]],
      restaurantowner:['',[ Validators.required] ],
    });

    this.getRestaurant(param);
  }

  getRestaurant(id)
  {
    this.restser.getRestaurantitem(id).subscribe( data =>
      {
        this.restaurant = data;
      });
  }

  onEdit()
  {
    //input.id = this.advertisementlist.length+1;
     this.restser.updateRestaurant(this.restaurant).subscribe( data => 
      console.log(data));
      this.route.navigateByUrl('restlist');
  }

  onCancel()
  {
    this.route.navigateByUrl('restlist');
  }
}
