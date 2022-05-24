import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ApiPageComponent } from './api-page/api-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './init/init.component';
import { GuardGuard } from '../app/services/guard.guard'

const routes: Routes = [
  //{ path: '', component: LandingPageComponent, outlet: 'landing'},
  //{ path: 'landing', component: LandingPageComponent, outlet: 'landing'},
  //{ path: '', component: InitComponent, outlet: 'init'}, 
  { path: '', redirectTo: 'init', pathMatch: 'full'},   
  { path: 'init', component: InitComponent},
  { path: 'landing', component: LandingPageComponent, canActivate:[GuardGuard]},
  { path: 'about', component: ResumePageComponent, canActivate:[GuardGuard]},
  { path: 'api', component: ApiPageComponent, canActivate:[GuardGuard]},
  { path: 'portfolio', component: PortfolioPageComponent, canActivate:[GuardGuard]},
 


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
