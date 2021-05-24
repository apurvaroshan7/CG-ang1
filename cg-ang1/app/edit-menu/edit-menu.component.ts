import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../Menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  regForm: FormGroup;
  menu:Menu =new Menu();
  constructor(private fb: FormBuilder, 
    private menuser: MenuService,
    private active:ActivatedRoute,
    private route: Router) 
  { 

  }

  ngOnInit(): void 
  {
    const param = this.active.snapshot.paramMap.get('id');
    console.log(param);
    this.regForm = this.fb.group({
      item: ['', [Validators.required]],
      price:['',[ Validators.required] ],
    });
    this.getMenu(param);
  }

  getMenu(id)
  {
    this.menuser.getMenu(id).subscribe( data =>
    {
      this.menu = data;
    });
  }

  onEdit()
  {
    //input.id = this.advertisementlist.length+1;
     this.menuser.updateMenu(this.menu).subscribe( data => {
      console.log(data)
    });
      this.route.navigateByUrl('menulist');
  }

  onCancel()
  {
    this.route.navigateByUrl('menulist');
  }

  

}
