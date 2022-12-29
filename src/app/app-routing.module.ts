import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { MedicineComponent } from './Medicine/medicine/medicine.component';

const routes: Routes = [
  {path:"Home", component:HomePageComponent},
  {path:"",redirectTo:"/Home", pathMatch:'full'},
  {path:"Medicine", component:MedicineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
