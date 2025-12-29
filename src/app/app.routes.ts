import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customer/customer.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {NotFoundComponent} from './not-found/not-found.component';

export const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {
    path:'home',
    component:HomeComponent
  },
  {path:'customer/:data',component:CustomerComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'**',component:NotFoundComponent}

];
