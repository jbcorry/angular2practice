import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component'
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  ROUTER_BINDINGS,
  ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';

@RouteConfig([
  { path: '/', component: AppComponent },
  { path: '/user', component: UserComponent, as: 'User' }
])

bootstrap(AppComponent);