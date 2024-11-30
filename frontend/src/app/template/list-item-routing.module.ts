import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AdminListComponent } from './admin-list/admin-list.component';

const routes: Routes = [
  { path: '', component: AdminListComponent},
  { path: 'user-Login', component: UserListComponent},
  { path: 'admin-Login', component: AdminListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListItemRoutingModule { }