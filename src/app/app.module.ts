import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SupHeaderComponent } from './components/sup-header/sup-header.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { LogButtonComponent } from './components/log-button/log-button.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ButtonComponent } from './components/button/button.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExperienceComponent } from './components/experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './components/education/education.component';
import { SkilsComponent } from './components/skils/skils.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { NewExpComponent } from './components/new-exp/new-exp.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EditExpComponent } from './components/edit-exp/edit-exp.component';
import { NewEduComponent } from './components/new-edu/new-edu.component';
import { EditEduComponent } from './components/edit-edu/edit-edu.component';
import { NewSkillComponent } from './components/new-skill/new-skill.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { EditPerComponent } from './components/edit-per/edit-per.component';



@NgModule({
  declarations: [
    AppComponent,
    SupHeaderComponent,
    SocialLinksComponent,
    LogButtonComponent,
    BannerComponent,
    AboutComponent,
    ButtonComponent,
    ExperienceComponent,
    EducationComponent,
    SkilsComponent,
    HomeComponent,
    LoginComponent,  
    NewExpComponent, EditExpComponent, NewEduComponent, EditEduComponent, NewSkillComponent, EditSkillComponent, EditPerComponent,
    

  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    NgpImagePickerModule
    
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
