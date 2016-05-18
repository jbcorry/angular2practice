import {Component} from 'angular2/core';
import {UserComponent} from "./users/user.component";

@Component({
	selector: 'ng-app',
	template: `
	<h3>Application Loaded Successfully</h3>
	<br>
	<br>
	<user-list></user-list>
	`,
	directives: [UserComponent]
})
export class AppComponent {

}
