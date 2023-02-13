import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ForecastComponent } from './forecast/forecast.component';
import { LoginComponent } from './login/login.component';
import { PlotComponent } from './plot/plot.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent,title:'Login-Page'
  },
  {
    path:'upload',component:UploadComponent,title:'Upload'
  },
  {
    path:'forecast',component:ForecastComponent,title:'Forecast'
  },
  {
    path:'plot',component:PlotComponent,title:'Plot'
  },
  {
    path:'**',component:ErrorComponent,title:'Error-404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
