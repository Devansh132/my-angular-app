import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-awesome-features',
  templateUrl: './awesome-features.component.html',
  styleUrls: ['./awesome-features.component.css']
})
export class AwesomeFeaturesComponent implements OnInit {
  paramsData: any;
  queryParamsData: any;
  resolverData: any;
  resolverMessage: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get params and query params from the route
    this.route.params.subscribe(params => {
      this.paramsData = params;
    });

    this.route.queryParams.subscribe(queryParams => {
      this.queryParamsData = queryParams;
    });

    this.route.data.subscribe(data => {
      this.resolverData = data['resolverData'];

      setTimeout(() => {
        // Set the resolver message to be displayed in the template
        this.resolverMessage = 'Resolver is working!';
      }, 2000);
    });
  }
}
