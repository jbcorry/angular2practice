import {Injectable} from 'angular2/core'

@Injectable()
export class UserService {
    getUsers() {
        return [
          {
          firstName: 'Luke',
          lastName: 'Skywalker'
          },
          {
          firstName: 'Leah',
          lastName: 'Skywalker'
          }
        ]
    }
}
