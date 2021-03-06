import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';
import { AppComponent } from './app.component';
import { EnterActivityComponent } from './enter-activity/enter-activity.component';
import { FriendsComponent } from './friends/friends.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'activity-feed', component: ActivityFeedComponent},
  {path: 'enter-activity', component: EnterActivityComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
