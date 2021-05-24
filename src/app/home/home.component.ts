import { ChangeDetectorRef, Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
      iconRegistry: MatIconRegistry,private changeDetector:ChangeDetectorRef, 
      sanitizer: DomSanitizer,
      private route:Router) {
        iconRegistry.addSvgIcon(
          'account',
          sanitizer.bypassSecurityTrustResourceUrl('assets/account.svg'));

        iconRegistry.addSvgIcon(
          'menu',
        sanitizer.bypassSecurityTrustResourceUrl('assets/menu.svg'));
        iconRegistry.addSvgIcon(
          'delete',
          sanitizer.bypassSecurityTrustResourceUrl('assets/delete.svg'));
          iconRegistry.addSvgIcon(
          'edit',
          sanitizer.bypassSecurityTrustResourceUrl('assets/edit.svg'));
          iconRegistry.addSvgIcon(
            'close',
            sanitizer.bypassSecurityTrustResourceUrl('assets/close.svg'));
      }
    
      logout()
      {
            localStorage.setItem('afterlogin',"false");
            localStorage.removeItem('role');
            this.route.navigateByUrl('login');
             
      }

  read()
  {
    return localStorage.getItem('role');
  }

  

  readvalues()
  {
      return localStorage.getItem('afterlogin');
  }
  
}
