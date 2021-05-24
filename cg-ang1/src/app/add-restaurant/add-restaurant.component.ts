import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { RestaurantComponent } from '../restaurant/restaurant.component';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {  

  regForm: FormGroup;
  check: boolean=true;
  restaurant:Restaurant =new Restaurant();
  login:Login = new Login();
  constructor(private fb: FormBuilder, 
    private logser:LoginService,
    private restser: RestaurantService,
    private route: Router) 
  { 

  }

  ngOnInit(): void {

    this.regForm = this.fb.group({
      restaurantname: ['', [Validators.required]],
      restaurantowner:['',[ Validators.required] ],
    });
    
  }
  onAdd()
  {
    //input.id = this.advertisementlist.length+1;
    this.restser.getRestaurantName(this.restaurant.restaurantname).subscribe( data =>
    {
        if(data == null)
        {
          this.logser.checkuser(this.restaurant.restaurantname).subscribe( data =>
            {
              if(data == null)
              {
                this.check = true;
                this.login.username= this.restaurant.restaurantname;
                this.login.password = "restaurant";
                this.login.role="restaurant";
                
                this.logser.addUserList(this.login).subscribe(data =>{
                  
                });
                this.restser.addRestaurantList(this.restaurant).subscribe(data => {
                  
                });
                this.route.navigateByUrl('restlist');
                 
              }
              else
              {
                this.check = false;
              }
            })
          
        }
        else
        {
          this.check = false;
        }
      })     
    }

    onCancel()
    {
      this.route.navigateByUrl('restlist');
    }

}
