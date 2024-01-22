import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  loggedInUser: string | undefined;
  user: string | undefined;
  
  ngOnInit(): void {
    this.loggedInUser = this.activeRoute.snapshot.queryParams['user'];
    console.log(this.loggedInUser);
    this.user = this.loggedInUser;
  }
}
