import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"info", component:InfoComponent},
  {path:"help", component:HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
