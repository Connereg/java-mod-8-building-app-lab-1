import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplicationBodyComponent } from './application-body/application-body.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list-component.component';


const routes: Routes = [
  { path: "", component: ApplicationBodyComponent },
  { path: "contactList", component: ContactListComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
