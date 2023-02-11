import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { HelpComponent } from './components/help/help.component';
import { MoodCardComponent } from './components/home/mood-card/mood-card.component';
import { SadMainComponent } from './components/sad/sad-main/sad-main.component';
import { SadAltComponent } from './components/sad/sad-alt/sad-alt.component';
import { BoredMainComponent } from './components/bored/bored-main/bored-main.component';
import { BoredAltComponent } from './components/bored/bored-alt/bored-alt.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    HelpComponent,
    MoodCardComponent,
    SadMainComponent,
    SadAltComponent,
    BoredMainComponent,
    BoredAltComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
