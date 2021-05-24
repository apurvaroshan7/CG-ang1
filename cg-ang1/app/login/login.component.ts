import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  regForm: FormGroup;
  submitted: boolean = false;
  login:Login= new Login();
  // login:Register= new Register();
  check: boolean=true;
  constructor(private fb: FormBuilder ,
              private route: Router, 
              private logser: LoginService) 
  { 
    
  }

  ngOnInit(): void 
  {
    this.regForm = this.fb.group({
      username: ['', [Validators.required ]],
      password:['',[ Validators.required] ],
    });
  }

  onLogin(){

     this.submitted=true;
     this.logser.getUser(this.login).subscribe( data =>
      {
        if(data != null)
        {
          this.check = true;
          localStorage.setItem('role',data.role);
          localStorage.setItem('afterlogin',"true");
          if(data.role == 'user')
          {
            this.route.navigateByUrl('user');
          }
          else if(data.role == 'admin')
          {
            this.route.navigateByUrl('menulist');
          }
          else
          {
            localStorage.setItem('resname',data.username);
            this.route.navigateByUrl('restmenu');
          }
        } 
        else
        {
          this.check=false;
        }
      })
    //   this.cserv.customerlogin(this.register)
    //    .subscribe((data) =>{
    //          (console.log(data),error=>console.error(error));
    //          if(data!=null){
    //            this.login = data as Register;
    //            this.check=true;
    //            localStorage.setItem('afterlogin',"true");
    //            localStorage.setItem('role',this.login.role);
    //            localStorage.setItem('username',user);
    //            localStorage.setItem('password',pass);
    //            this.route.navigateByUrl('home');
               
    //           }
    //           else
    //           {
    //             this.check=false;
    //           }
             
    //    })
       
       
    }

}
