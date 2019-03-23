import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MessagesComponent } from './messages/messages.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { TasksComponent } from './tasks/tasks.component';
import { CalenderComponent } from './calender/calender.component';
import { LayoutComponent } from './layout/layout.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PaymentsComponent } from './payments/payments.component';
import { DirectoryComponent } from './directory/directory.component';
import { LibraryComponent } from './library/library.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'calender', component: CalenderComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
