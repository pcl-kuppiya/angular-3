import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customer/customer.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NewComponent} from './about-us/inner-items/new/new.component';
import {DeleteComponent} from './about-us/inner-items/delete/delete.component';
import {GetComponent} from './about-us/inner-items/get/get.component';

export const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'customer/:data',component:CustomerComponent},

  {path:'about-us',component:AboutUsComponent,children:[
      {path:'new',component:NewComponent},
      {path:'delete',component:DeleteComponent},
      {path:'get',component:GetComponent}
    ]},

  {path:'**',component:NotFoundComponent}

];
