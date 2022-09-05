import { Component } from '@angular/core';
import { AuthService } from './api/repository/auth-service-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';

  public showMenu: boolean = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
}
