import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngryMainComponent } from './components/angry/angry-main/angry-main.component';
import { AngrySemaphoreComponent } from './components/angry/angry-semaphore/angry-semaphore.component';
import { AngryThermometerComponent } from './components/angry/angry-thermometer/angry-thermometer.component';
import { AngryTimerComponent } from './components/angry/angry-timer/angry-timer.component';
import { BoredAltComponent } from './components/bored/bored-alt/bored-alt.component';
import { BoredMainComponent } from './components/bored/bored-main/bored-main.component';
import { HappyAltComponent } from './components/happy/happy-alt/happy-alt.component';
import { HappyMainComponent } from './components/happy/happy-main/happy-main.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { SadAltComponent } from './components/sad/sad-alt/sad-alt.component';
import { SadMainComponent } from './components/sad/sad-main/sad-main.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"info", component:InfoComponent},
  {path:"help", component:HelpComponent},
  {path:"happy-main", component:HappyMainComponent },
  {path:"happy-alt", component:HappyAltComponent},
  {path:"bored-main", component:BoredMainComponent},
  {path:"bored-alt", component:BoredAltComponent},
  {path:"sad-main",component:SadMainComponent},
  {path:"sad-alt", component:SadAltComponent},
  {path:"angry-main",component:AngryMainComponent},
  {path:"angry-semaphore",component:AngrySemaphoreComponent},
  {path:"angry-thermometer", component:AngryThermometerComponent},
  {path:"angry-timer",component:AngryTimerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
