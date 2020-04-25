import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [

  { path: 'header', component: HeaderComponent },
  { path: 'home', component: MainpageComponent },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
