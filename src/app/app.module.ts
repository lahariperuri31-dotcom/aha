import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestreleaseComponent } from './latestrelease/latestrelease.component';
import { MollywoodmoodComponent } from './mollywoodmood/mollywoodmood.component';
import { AhaoriginalsComponent } from './ahaoriginals/ahaoriginals.component';
import { WatchforfreeComponent } from './watchforfree/watchforfree.component';
import { WatchbylanguageComponent } from './navigatingcomponent/watchbylanguage/watchbylanguage.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { TrendingnowComponent } from './navigatingcomponent/trendingnow/trendingnow.component';
import { InthespotlightComponent } from './navigatingcomponent/inthespotlight/inthespotlight.component';
import { TamiltimelessclassicsComponent } from './navigatingcomponent/tamiltimelessclassics/tamiltimelessclassics.component';
import { TelugutimelessclassicsComponent } from './navigatingcomponent/telugutimelessclassics/telugutimelessclassics.component';
import { HandpickedforyouComponent } from './navigatingcomponent/handpickedforyou/handpickedforyou.component';
import { UpcomingonahaComponent } from './navigatingcomponent/upcomingonaha/upcomingonaha.component';
import { ComedytimeComponent } from './navigatingcomponent/comedytime/comedytime.component';
import { ActionarenaComponent } from './navigatingcomponent/actionarena/actionarena.component';
import { CinematreatsComponent } from './navigatingcomponent/cinematreats/cinematreats.component';
import { EmotionalanddramaComponent } from './navigatingcomponent/emotionalanddrama/emotionalanddrama.component';
import { FamilyentertainersComponent } from './navigatingcomponent/familyentertainers/familyentertainers.component';
import { GenreComponent } from './navigatingcomponent/genre/genre.component';
import { HeartbeatstoriesComponent } from './navigatingcomponent/heartbeatstories/heartbeatstories.component';
import { HeartfeltdramaComponent } from './navigatingcomponent/heartfeltdrama/heartfeltdrama.component';
import { HiddengemsComponent } from './navigatingcomponent/hiddengems/hiddengems.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestreleaseComponent,
    MollywoodmoodComponent,
    AhaoriginalsComponent,
    WatchforfreeComponent,
    WatchbylanguageComponent,
    NavbarComponent,
    FooterComponent,
    TrendingnowComponent,
    InthespotlightComponent,
    TamiltimelessclassicsComponent,
    TelugutimelessclassicsComponent,
    HandpickedforyouComponent,
    UpcomingonahaComponent,
    ComedytimeComponent,
    ActionarenaComponent,
    CinematreatsComponent,
    EmotionalanddramaComponent,
    FamilyentertainersComponent,
    GenreComponent,
    HeartbeatstoriesComponent,
    HeartfeltdramaComponent,
    HiddengemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
