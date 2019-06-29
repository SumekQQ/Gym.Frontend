import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { OktaAuthModule,  OktaCallbackComponent } from '@okta/okta-angular';
import { AppComponent } from './app.component';
import { ExerciseMainComponent } from './exercise/main-exercise/main.component';
import { GridExerciseComponent } from './exercise/list-exercise/list-exercise.component';
import { AddOrUpdateExerciseComponent } from './exercise/add-or-update-exercise/add-or-update-exercise.component';
import { ExerciseService } from './services/exercise.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { MainPlanComponent } from './plan/main-plan/main-plan.component';
import { HeaderComponent } from './header/header.component';
import { AddOrUpdatePlanComponent } from './plan/add-or-update-plan/add-or-update-plan.component';
import { ListPlanComponent } from './plan/list-plan/list-plan.component';
import { HomeComponent } from './home/home.component';
import { NgbdDatepickerBasic } from './day/date-picker/date-picker.component';
import { MainDayComponent } from './day/main-day/main-day.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddOrUpdateDayComponent } from './day/add-or-update-day/add-or-update-day.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'implicit/callback', component: OktaCallbackComponent},
  { path: 'exercise', component: ExerciseMainComponent},
  { path: 'plan', component: MainPlanComponent},
  { path: 'calendar', component: MainDayComponent},
];

const config = {
  issuer: 'https://dev-278878.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oap6k15eSaIvBFHS356',
  scope: 'openid profile email'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridExerciseComponent,
    AddOrUpdateExerciseComponent,
    AddOrUpdatePlanComponent,
    ListPlanComponent,
    MainPlanComponent,
    HeaderComponent,
    ExerciseMainComponent,
    NgbdDatepickerBasic,
    MainDayComponent,
    AddOrUpdateDayComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    OktaAuthModule.initAuth(config),
    NgbModule
  ],
  providers: [
    ExerciseService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
