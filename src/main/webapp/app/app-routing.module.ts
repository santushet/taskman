import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { Authority } from 'app/config/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { errorRoute } from './layouts/error/error.route';

import HomeComponent from './home/home.component';
// import NavbarComponent from './layouts/navbar/navbar.component';
// import LoginComponent from './login/login.component';

import { CalendarComponent } from './components/apps/calendar/calendar.component';
import { ChatComponent } from './components/apps/chat/chat.component';
import { ContactsComponent } from './components/apps/contacts/contacts.component';
import { ComposeEmailComponent } from './components/apps/email/compose-email/compose-email.component';
import { EmailComponent } from './components/apps/email/email.component';
import { ReadEmailComponent } from './components/apps/email/read-email/read-email.component';
import { FileManagerComponent } from './components/apps/file-manager/file-manager.component';
import { FmAssetsComponent } from './components/apps/file-manager/fm-assets/fm-assets.component';
import { FmDocumentsComponent } from './components/apps/file-manager/fm-documents/fm-documents.component';
import { FmMediaComponent } from './components/apps/file-manager/fm-media/fm-media.component';
import { FmPersonalComponent } from './components/apps/file-manager/fm-personal/fm-personal.component';
import { FmProjectsComponent } from './components/apps/file-manager/fm-projects/fm-projects.component';
import { FmRecentFilesComponent } from './components/apps/file-manager/fm-recent-files/fm-recent-files.component';
import { FmTemplatesComponent } from './components/apps/file-manager/fm-templates/fm-templates.component';
import { TaskDetailsComponent } from './components/apps/to-do-list/task-details/task-details.component';
import { ToDoListComponent } from './components/apps/to-do-list/to-do-list.component';
import { ConfirmMailComponent } from './components/authentication/confirm-mail/confirm-mail.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { LockScreenComponent } from './components/authentication/lock-screen/lock-screen.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { SigninSignupComponent } from './components/authentication/signin-signup/signin-signup.component';
import { ApexchartsComponent } from './components/charts/apexcharts/apexcharts.component';
import { ChartjsComponent } from './components/charts/chartjs/chartjs.component';
import { EchartsComponent } from './components/charts/echarts/echarts.component';
import { GaugeComponent } from './components/charts/gauge/gauge.component';
import { InternalErrorComponent } from './components/common/internal-error/internal-error.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { MemberProfileComponent } from './components/contact-list/member-profile/member-profile.component';
import { MembersGridComponent } from './components/contact-list/members-grid/members-grid.component';
import { MembersGrid2Component } from './components/contact-list/members-grid2/members-grid2.component';
import { MembersListComponent } from './components/contact-list/members-list/members-list.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LessonPreviewComponent } from './components/courses/lesson-preview/lesson-preview.component';
import { AnalyticsComponent } from './components/dashboard/analytics/analytics.component';
import { EcommerceComponent } from './components/dashboard/ecommerce/ecommerce.component';
import { LmsCoursesComponent } from './components/dashboard/lms-courses/lms-courses.component';
import { ProjectManagementComponent } from './components/dashboard/project-management/project-management.component';
import { AdvancedFormComponent } from './components/forms/advanced-form/advanced-form.component';
import { BasicFormComponent } from './components/forms/basic-form/basic-form.component';
import { EditorsComponent } from './components/forms/editors/editors.component';
import { FileUploaderComponent } from './components/forms/file-uploader/file-uploader.component';
import { WizardFormComponent } from './components/forms/wizard-form/wizard-form.component';
import { InvoiceDetailsComponent } from './components/invoice/invoice-details/invoice-details.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { AccountComponent } from './components/pages/account/account.component';
import { AnalyticsCustomersComponent } from './components/pages/analytics-customers/analytics-customers.component';
import { AnalyticsReportsComponent } from './components/pages/analytics-reports/analytics-reports.component';
import { BlankPageComponent } from './components/pages/blank-page/blank-page.component';
import { ConnectionsComponent } from './components/pages/connections/connections.component';
import { CreateProductComponent } from './components/pages/ecommerce/create-product/create-product.component';
import { ProductDetailsComponent } from './components/pages/ecommerce/product-details/product-details.component';
import { ProductSellersComponent } from './components/pages/ecommerce/product-sellers/product-sellers.component';
import { ProductsCartComponent } from './components/pages/ecommerce/products-cart/products-cart.component';
import { ProductsCheckoutComponent } from './components/pages/ecommerce/products-checkout/products-checkout.component';
import { ProductsCustomersComponent } from './components/pages/ecommerce/products-customers/products-customers.component';
import { ProductsOrderDetailsComponent } from './components/pages/ecommerce/products-order-details/products-order-details.component';
import { ProductsOrdersComponent } from './components/pages/ecommerce/products-orders/products-orders.component';
import { ProductsComponent } from './components/pages/ecommerce/products/products.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { FlaticonComponent } from './components/pages/icons/flaticon/flaticon.component';
import { MaterialIconsComponent } from './components/pages/icons/material-icons/material-icons.component';
import { MaterialSymbolsComponent } from './components/pages/icons/material-symbols/material-symbols.component';
import { RemixiconComponent } from './components/pages/icons/remixicon/remixicon.component';
import { MapsComponent } from './components/pages/maps/maps.component';
import { NotificationsComponent } from './components/pages/notifications/notifications.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SearchComponent } from './components/pages/search/search.component';
import { SecurityComponent } from './components/pages/security/security.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { TimelineComponent } from './components/pages/timeline/timeline.component';
import { PClientsComponent } from './components/projects/p-clients/p-clients.component';
import { PKanbanBoardComponent } from './components/projects/p-kanban-board/p-kanban-board.component';
import { PTasksComponent } from './components/projects/p-tasks/p-tasks.component';
import { PTeamComponent } from './components/projects/p-team/p-team.component';
import { PUsersComponent } from './components/projects/p-users/p-users.component';
import { ProjectCreateComponent } from './components/projects/project-create/project-create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BasicTableComponent } from './components/tables/basic-table/basic-table.component';
import { DataTableComponent } from './components/tables/data-table/data-table.component';
import { AccordionComponent } from './components/ui-kit/accordion/accordion.component';
import { AlertsComponent } from './components/ui-kit/alerts/alerts.component';
import { AutocompleteComponent } from './components/ui-kit/autocomplete/autocomplete.component';
import { AvatarsComponent } from './components/ui-kit/avatars/avatars.component';
import { BadgesComponent } from './components/ui-kit/badges/badges.component';
import { BreadcrumbComponent } from './components/ui-kit/breadcrumb/breadcrumb.component';
import { ButtonToggleComponent } from './components/ui-kit/button-toggle/button-toggle.component';
import { ButtonsComponent } from './components/ui-kit/buttons/buttons.component';
import { CardsComponent } from './components/ui-kit/cards/cards.component';
import { CarouselsComponent } from './components/ui-kit/carousels/carousels.component';
import { CheckboxComponent } from './components/ui-kit/checkbox/checkbox.component';
import { ChipsComponent } from './components/ui-kit/chips/chips.component';
import { ColorPickerComponent } from './components/ui-kit/color-picker/color-picker.component';
import { DatepickerComponent } from './components/ui-kit/datepicker/datepicker.component';
import { DialogComponent } from './components/ui-kit/dialog/dialog.component';
import { DividerComponent } from './components/ui-kit/divider/divider.component';
import { DragDropComponent } from './components/ui-kit/drag-drop/drag-drop.component';
import { ExpansionComponent } from './components/ui-kit/expansion/expansion.component';
import { FormFieldComponent } from './components/ui-kit/form-field/form-field.component';
import { GridComponent } from './components/ui-kit/grid/grid.component';
import { ImagesComponent } from './components/ui-kit/images/images.component';
import { InputComponent } from './components/ui-kit/input/input.component';
import { ListComponent } from './components/ui-kit/list/list.component';
import { ListboxComponent } from './components/ui-kit/listbox/listbox.component';
import { MenusComponent } from './components/ui-kit/menus/menus.component';
import { PaginationComponent } from './components/ui-kit/pagination/pagination.component';
import { ProgressBarComponent } from './components/ui-kit/progress-bar/progress-bar.component';
import { RadioComponent } from './components/ui-kit/radio/radio.component';
import { SelectComponent } from './components/ui-kit/select/select.component';
import { SidenavComponent } from './components/ui-kit/sidenav/sidenav.component';
import { SlideToggleComponent } from './components/ui-kit/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/ui-kit/slider/slider.component';
import { SnackbarComponent } from './components/ui-kit/snackbar/snackbar.component';
import { SpacingComponent } from './components/ui-kit/spacing/spacing.component';
import { StepperComponent } from './components/ui-kit/stepper/stepper.component';
import { TableComponent } from './components/ui-kit/table/table.component';
import { TabsComponent } from './components/ui-kit/tabs/tabs.component';
import { ToolbarComponent } from './components/ui-kit/toolbar/toolbar.component';
import { TooltipComponent } from './components/ui-kit/tooltip/tooltip.component';
import { TreeComponent } from './components/ui-kit/tree/tree.component';
import { TypographyComponent } from './components/ui-kit/typography/typography.component';
import { VideosComponent } from './components/ui-kit/videos/videos.component';
import { CryptoComponent } from './components/dashboard/crypto/crypto.component';
import { HelpDeskComponent } from './components/dashboard/help-desk/help-desk.component';
import { SaasAppComponent } from './components/dashboard/saas-app/saas-app.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        // {
        //   path: '',
        //   component: HomeComponent,
        //   title: 'Welcome to Task Manager',
        // },
        {
          path: '',
          component: ProjectManagementComponent,
          title: 'Welcome to Task Manager',
        },
        // {
        //   path: '',
        //   component: NavbarComponent,
        //   outlet: 'navbar',
        // },
        {
          path: 'admin',
          data: {
            authorities: [Authority.ADMIN],
          },
          canActivate: [UserRouteAccessService],
          loadChildren: () => import('./admin/admin-routing.module'),
        },
        {
          path: 'account',
          loadChildren: () => import('./account/account.route'),
        },
        {
          path: 'authentication/login',
          component: LoginComponent,
          title: 'Sign in',
        },
        {
          path: 'authentication/register',
          component: RegisterComponent,
        },
        {
          path: '',
          loadChildren: () => import(`./entities/entity-routing.module`).then(({ EntityRoutingModule }) => EntityRoutingModule),
        },
        ...errorRoute,
      ],
      { enableTracing: DEBUG_INFO_ENABLED, bindToComponentInputs: true },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
