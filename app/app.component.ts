import {Component} from 'angular2/core';
import {UserComponent} from "./users/user.component";
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  ROUTER_BINDINGS,
  ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';

@Component({
	selector: 'ng-app',
	template: `
	<h3>Application Loaded Successfully</h3>
	<br>
	<br>
	<a href='/#/user' router-link="['User']">New Route</a>
    
	`
})



export class AppComponent {

}
