import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ApiPageComponent } from './api-page/api-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { InitComponent } from './init/init.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonaService } from './services/persona.service';
import { InterceptorService } from './services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    ResumePageComponent,
    LandingPageComponent,
    ApiPageComponent,
    PortfolioPageComponent,
    InitComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,   
    AnimateOnScrollModule.forRoot()       
  ],
  providers: [PersonaService, 
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {


}
