import { Route } from '@angular/router';

import { ResetPasswordComponent } from './reset-password.component';

const passwordResetFinishRoute: Route = {
  path: 'authentication/reset-password',
  component: ResetPasswordComponent,
  title: 'Password',
};

export default passwordResetFinishRoute;
