import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminListComponent } from './template/admin-list/admin-list.component';
import { UserListComponent } from './template/user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, AdminListComponent, UserListComponent],
  imports: [
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
