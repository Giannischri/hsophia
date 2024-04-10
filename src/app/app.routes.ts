import {RouterModule, Routes} from '@angular/router';
import {LoginformComponent} from "./loginform/loginform.component";
import {SignupformComponent} from "./signupform/signupform.component";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [

      { path:'sign-in', component: LoginformComponent },
      { path:'about',component: AboutComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
