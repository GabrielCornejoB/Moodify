import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { HelpComponent } from './components/help/help.component';
import { MoodCardComponent } from './components/home/mood-card/mood-card.component';
import { HappyMainComponent } from './components/happy/happy-main/happy-main.component';
import { HappyAltComponent } from './components/happy/happy-alt/happy-alt.component';
import { AngryMainComponent } from './components/angry/angry-main/angry-main.component';
import { AngryThermometerComponent } from './components/angry/angry-thermometer/angry-thermometer.component';
import { AngrySemaphoreComponent } from './components/angry/angry-semaphore/angry-semaphore.component';
import { AngryTimerComponent } from './components/angry/angry-timer/angry-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    HelpComponent,
    MoodCardComponent,
    HappyMainComponent,
    HappyAltComponent,
    AngryMainComponent,
    AngryThermometerComponent,
    AngrySemaphoreComponent,
    AngryTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
