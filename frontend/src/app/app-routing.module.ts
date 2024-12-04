import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './sidebar/user/user.component';
import { RoleComponent } from './sidebar/role/role.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'role', component: RoleComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
