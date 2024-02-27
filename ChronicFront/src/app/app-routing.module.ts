import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

import { KnowMoreComponent } from './pages/know-more/know-more.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { Dashboard1Component } from './pages/dashboard1/dashboard1.component';
import { Dashboard2Component } from './pages/dashboard2/dashboard2.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:"signup",
    component:SignUpComponent,
    pathMatch:'full'
  },
  {
    path:"knowmore",
    component:KnowMoreComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"aboutus",
    component:AboutusComponent,
    pathMatch:'full'
  
  },
  {
    path:"dashboard1",
    component:Dashboard1Component,
    pathMatch:'full'
  },
  {
    path:"dashboard2",
    component:Dashboard2Component,
    pathMatch:'full'
  },
  {
    path:"contact",
    component:ContactComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
