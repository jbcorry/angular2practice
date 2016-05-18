import {Component} from 'angular2/core';
import {UserService} from './user.service'


@Component({
  selector: 'user-list',
  templateUrl: './app/users/user.component.html',
  providers: [UserService]
})


export class UserComponent {
    userName = 'Joe';
    lastName = 'Neuman';
    users = [];

    contructor(private _userService: UserService) {

    }

    changeUserName() {
      this.lastName = 'Skywalker';
    }
    getUsers() {
        this.users = _userService.getUsers()
    }
}
