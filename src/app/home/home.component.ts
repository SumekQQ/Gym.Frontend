import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public isAuthenticated: boolean;
  constructor(public oktaAuth: OktaAuthService) {
    this.oktaAuth.isAuthenticated().then(result => {
      this.isAuthenticated = result;

    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated);
    });
  }
}
