import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './views/pages/core/about/about.component';
import { HomeComponent } from './views/pages/core/home/home.component';
import { ContactComponent } from './views/pages/core/contact/contact.component';
import { UserDashboardComponent } from './views/pages/core/userdashboard/userdashboard.component';
import { ContentProviderComponent } from './views/pages/core/content-provider/create-content-provider/content-provider.component';
import { ContentAuthorizerComponent } from './views/pages/core/content-authorizer/create-content-authorizer/content-authorizer.component';
import { AdminDashboardComponent } from './views/pages/core/admin/dashboard/admin-dashboard.component';
import { ViewUsersComponent } from './views/pages/core/admin/users/view-users/view-users.component';
import { AddUsersComponent } from './views/pages/core/admin/users/add-users/add-users.component';
import { ChangePasswordComponent } from './views/pages/core/admin/users/change-password/change-password.component';
import { AddAuthorizersComponent } from './views/pages/core/admin/content-authorizer/add-authorizer/add-authorizers.component';
import { ViewAuthorizersComponent } from './views/pages/core/admin/content-authorizer/view-authorizer/view-authorizers.component';
import { AddProvidersComponent } from './views/pages/core/admin/content-provider/add-provider/add-providers.component';
import { ViewProvidersComponent } from './views/pages/core/admin/content-provider/view-provider/view-providers.component';
import { ViewConsumersComponent } from './views/pages/core/admin/content-consumer/view-consumer/view-consumers.component';
import { AddConsumersComponent } from './views/pages/core/admin/content-consumer/add-consumer/add-consumers.component';
import { ContentAuthorizerReportComponent } from './views/pages/core/admin/reports/content-authorizer/content-authorizer-report.component';
import { ContentProviderReportComponent } from './views/pages/core/admin/reports/content-provider/content-provider-report.component';
import { LoginComponent } from './views/forms/login/login.component';
import { ContentProviderDashboardComponent } from './views/pages/core/content-provider/dashboard/content-provider-dashboard.component';
import { ContentProviderProfileComponent } from './views/pages/core/content-provider/profile/content-provider-profile.component';
import { SingleSubmissionComponent } from './views/pages/core/content-provider/submissions/single-submission/single-submission.component';
import { MultipleSubmissionComponent } from './views/pages/core/content-provider/submissions/multiple-submission/multiple-submission.component';
import { ContentProviderHistoryComponent } from './views/pages/core/content-provider/history/content-provider-history.component';
import { CpArticlesComponent } from './views/pages/core/content-provider/submissions/multiple-submission/articles/cp-articles.component';
import { CpAudioClipComponent } from './views/pages/core/content-provider/submissions/multiple-submission/audio-clip/cp-audio-clip.component';
import { CpBooksComponent } from './views/pages/core/content-provider/submissions/multiple-submission/books/cp-books.component';
import { CpCaseStudyComponent } from './views/pages/core/content-provider/submissions/multiple-submission/case-study/cp-case-study.component';
import { CpImagesComponent } from './views/pages/core/content-provider/submissions/multiple-submission/images/cp-images.component';
import { CpVideoClipComponent } from './views/pages/core/content-provider/submissions/multiple-submission/video-clip/cp-video-clip.component';
import { CpArticlesHistoryComponent } from './views/pages/core/content-provider/history/articles/cp-articles-history.component';
import { CpAudioClipHistoryComponent } from './views/pages/core/content-provider/history/audio-clip/cp-audio-clip-history.component';
import { CpBooksHistoryComponent } from './views/pages/core/content-provider/history/books/cp-books-history.component';
import { CpCaseStudyHistoryComponent } from './views/pages/core/content-provider/history/case-study/cp-case-study-history.component';
import { CpImagesHistoryComponent } from './views/pages/core/content-provider/history/images/cp-images-history.component';
import { CpVideoClipHistoryComponent } from './views/pages/core/content-provider/history/video-clip/cp-video-clip-history.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '_', loadChildren: './modules/domain-high-priority.module#DomainHighPriorityModule' },
  { path: 'sec', loadChildren: './modules/security.module#SecurityModule' },
  { path: 'contact', component: ContactComponent },
  { path: 'userdashboard', component: UserDashboardComponent },
  { path: 'content-provider', component: ContentProviderComponent},
  { path: 'content-authorizer', component: ContentAuthorizerComponent},
  { path: 'dashboard', component: AdminDashboardComponent},
  { path: 'users/view-users', component: ViewUsersComponent},
  { path: 'users/add-users', component: AddUsersComponent},
  { path: 'users/change-password', component: ChangePasswordComponent},
  { path: 'content-authorizer/view-authorizers', component: ViewAuthorizersComponent},
  { path: 'content-authorizer/add-authorizers', component: AddAuthorizersComponent},
  { path: 'content-provider/add-providers', component: AddProvidersComponent},
  { path: 'content-provider/view-providers', component: ViewProvidersComponent},
  { path: 'content-consumer/view-consumers', component: ViewConsumersComponent},
  { path: 'content-consumer/add-consumers', component: AddConsumersComponent},
  { path: 'reports/content-authorizer-report', component: ContentAuthorizerReportComponent},
  { path: 'reports/content-provider-report', component: ContentProviderReportComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cp-dashboard', component: ContentProviderDashboardComponent},
  { path: 'cp-profile', component: ContentProviderProfileComponent},
  { path: 'submissions/cp-single-submission', component: SingleSubmissionComponent},
  { path: 'submissions/cp-multiple-submission', component: MultipleSubmissionComponent,
  children: [
    { path: 'cp-articles', component: CpArticlesComponent},
    { path: 'cp-audio-clip', component: CpAudioClipComponent},
    { path: 'cp-books', component: CpBooksComponent},
    { path: 'cp-case-study', component: CpCaseStudyComponent},
    { path: 'cp-images', component: CpImagesComponent},
    { path: 'cp-video-clip', component: CpVideoClipComponent},
    { path: '', redirectTo: 'cp-articles', pathMatch: 'full' }
  ]
},
  { path: 'cp-history', component: ContentProviderHistoryComponent,
  children: [
    { path: 'cp-articles-history', component: CpArticlesHistoryComponent},
    { path: 'cp-audio-clip-history', component: CpAudioClipHistoryComponent},
    { path: 'cp-books-history', component: CpBooksHistoryComponent},
    { path: 'cp-case-study-history', component: CpCaseStudyHistoryComponent},
    { path: 'cp-images-history', component: CpImagesHistoryComponent},
    { path: 'cp-video-clip-history', component: CpVideoClipHistoryComponent},
    { path: '', redirectTo: 'cp-articles-history', pathMatch: 'full' }
  ]
},
  { path: '', redirectTo: 'cp-dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

