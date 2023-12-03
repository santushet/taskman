import { Route } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password.component';

const passwordResetInitRoute: Route = {
  path: 'reset/request',
  component: ForgotPasswordComponent,
  title: 'Password',
};

export default passwordResetInitRoute;
