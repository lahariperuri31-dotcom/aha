import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestreleaseComponent } from './navigatingcomponent/latestrelease/latestrelease.component';
import { MollywoodmoodComponent } from './navigatingcomponent/mollywoodmood/mollywoodmood.component';
import { AhaoriginalsComponent } from './navigatingcomponent/ahaoriginals/ahaoriginals.component';
import { WatchforfreeComponent } from './navigatingcomponent/watchforfree/watchforfree.component';
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
import { HighvoltageComponent } from './navigatingcomponent/highvoltage/highvoltage.component';
import { HouseofhorrersComponent } from './navigatingcomponent/houseofhorrers/houseofhorrers.component';
import { KillertwistsComponent } from './navigatingcomponent/killertwists/killertwists.component';
import { LaughterloadedComponent } from './navigatingcomponent/laughterloaded/laughterloaded.component';
import { LivechannelsComponent } from './navigatingcomponent/livechannels/livechannels.component';
import { LovediariesComponent } from './navigatingcomponent/lovediaries/lovediaries.component';
import { MostwatchedintamilComponent } from './navigatingcomponent/mostwatchedintamil/mostwatchedintamil.component';
import { IndieandfestivalfilmsComponent } from './navigatingcomponent/indieandfestivalfilms/indieandfestivalfilms.component';
import { MostrewatchedgemsComponent } from './navigatingcomponent/mostrewatchedgems/mostrewatchedgems.component';
import { MostwatchedinteluguComponent } from './navigatingcomponent/mostwatchedintelugu/mostwatchedintelugu.component';
import { MysteryandsupernaturalComponent } from './navigatingcomponent/mysteryandsupernatural/mysteryandsupernatural.component';
import { RegionalmixComponent } from './navigatingcomponent/regionalmix/regionalmix.component';
import { RetroandclassicgemsComponent } from './navigatingcomponent/retroandclassicgems/retroandclassicgems.component';
import { ThrillersandcrimeComponent } from './navigatingcomponent/thrillersandcrime/thrillersandcrime.component';
import { Watchin4kComponent } from './navigatingcomponent/watchin4k/watchin4k.component';
import { WatchinteluguandtamilComponent } from './navigatingcomponent/watchinteluguandtamil/watchinteluguandtamil.component';

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
    HiddengemsComponent,
    HighvoltageComponent,
    HouseofhorrersComponent,
    KillertwistsComponent,
    LaughterloadedComponent,
    LivechannelsComponent,
    LovediariesComponent,
    MostwatchedintamilComponent,
    IndieandfestivalfilmsComponent,
    MostrewatchedgemsComponent,
    MostwatchedinteluguComponent,
    MysteryandsupernaturalComponent,
    RegionalmixComponent,
    RetroandclassicgemsComponent,
    ThrillersandcrimeComponent,
    Watchin4kComponent,
    WatchinteluguandtamilComponent
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
