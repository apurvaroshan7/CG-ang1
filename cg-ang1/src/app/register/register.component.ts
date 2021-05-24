import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  onRegister(){

     this.submitted=true;
     this.login.role="user";
     this.logser.checkuser(this.login.username).subscribe( data =>
     {
       if(data == null)
       {
         this.check = true;
         this.logser.addUserList(this.login).subscribe( data =>
          {
            this.route.navigateByUrl('login');
          })
       }
       else
       {
         this.check = false;
       }
     })
       
    }


}
