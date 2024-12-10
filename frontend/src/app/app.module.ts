import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabViewModule } from 'primeng/tabview';
import { RoleComponent } from './sidebar/role/role.component'; // Import TabViewModule from PrimeNG
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [AppComponent, SidebarComponent, RoleComponent],
  imports: [
    BrowserModule,
    SharedModule,
    TabViewModule,
    RouterModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }



