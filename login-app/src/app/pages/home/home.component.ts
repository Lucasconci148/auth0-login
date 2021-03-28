import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  user:any;
  loged: boolean = false;
  loading: boolean = true;
  isMobile: boolean = true;

  constructor(private auth: AuthService) { 
    this.isMobile = window.innerWidth < 800;
  }

  ngOnInit(): void {

    this.auth.isAuthenticated$.subscribe((resp) => {

      this.loading = false;
      // response a boolean indicating when the usr is loged
      this.loged = resp;

      this.auth.user$.subscribe((usr) => {
        // here are the usr data.
        this.user = usr;
      });
      
    });
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout();
  }
}
