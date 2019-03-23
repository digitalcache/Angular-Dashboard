import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CalenderComponent } from './calender/calender.component';
import { DirectoryComponent } from './directory/directory.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LibraryComponent } from './library/library.component';
import { MessagesComponent } from './messages/messages.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { MangerActivityComponent } from './home/manger-activity/manger-activity.component';
import { ProjectActivityComponent } from './home/project-activity/project-activity.component';
import { TeamListComponent } from './home/team-list/team-list.component';
import { NgSemanticModule } from 'ng-semantic';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountsComponent,
    AnalyticsComponent,
    CalenderComponent,
    DirectoryComponent,
    HelpComponent,
    HomeComponent,
    LayoutComponent,
    LibraryComponent,
    MessagesComponent,
    PaymentsComponent,
    ProjectsComponent,
    TasksComponent,
    MangerActivityComponent,
    ProjectActivityComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSemanticModule,
    HttpClientModule,
    SuiModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
