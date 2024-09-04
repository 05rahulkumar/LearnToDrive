import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './mainComponent/home/home.component';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then((mod) => mod.AdminModule), canLoad: [RoleGuard], data: { role: 'Admin' } },
  { path: '', loadChildren: () => import('./client/client.module').then((mod) => mod.ClientModule), canLoad: [RoleGuard], data: { role: 'Admin' } },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
