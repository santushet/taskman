import { Route } from '@angular/router';

import { RegisterComponent } from './register.component';

const registerRoute: Route = {
  path: '/authentication/register',
  component: RegisterComponent,
  title: 'Registration',
};

export default registerRoute;
