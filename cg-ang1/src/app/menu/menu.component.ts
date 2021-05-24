import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AdminComponent } from '../admin/admin.component';
import{ MenuService } from '../menu.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  displayedColumns: string[] = ['item','price','edit','delete'];
  dataSource = new MatTableDataSource();
  constructor(private menuser:MenuService,
    private dialog:MatDialog) { }

  ngOnInit(): void {

    this.getAllMenulist();
  }

  getAllMenulist()
  {
    this.menuser.getAllMenulist().subscribe(res=>
    {
          this.dataSource.data=res;
    });
  }

  onDelete(id)
  {
    var r = confirm("Confirm to delete the menu details!");
    if(r == true)
    {
      this.menuser.deleteMenu(id).subscribe( data =>
        {
          this.getAllMenulist();
        });
        this.menuser.afterdelete();
    }
  }

  onAssign()
  {
    const dialogconfig =  new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus= true;
    this.dialog.open(AdminComponent,dialogconfig);
  }

}
