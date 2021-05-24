import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from '../Menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  regForm: FormGroup;
  menu:Menu =new Menu();
  constructor(private fb: FormBuilder, 
    private menuser: MenuService,
    private route: Router) 
  { 

  }

  ngOnInit(): void {

    this.regForm = this.fb.group({
      item: ['', [Validators.required]],
      price:['',[ Validators.required] ],
    });
    
  }
  onAdd()
  {
    //input.id = this.advertisementlist.length+1;
     this.menuser.addMenuList(this.menu).subscribe( data => 
      console.log(data));
      this.route.navigateByUrl('menulist');
  }

  onCancel()
  {
    this.route.navigateByUrl('menulist');
  }

}
