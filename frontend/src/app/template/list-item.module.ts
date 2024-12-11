import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemRoutingModule } from './list-item-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { RoleListComponent } from './role-list/role-list.component';
import { TabViewModule } from 'primeng/tabview';
@NgModule({
  declarations: [UserListComponent, AdminListComponent, RoleListComponent],
  imports: [
    CommonModule,
    ListItemRoutingModule,
    ButtonModule,
    TableModule,
    CardModule,
    DialogModule,
    FormsModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule,
    TabViewModule,
  ]
})
export class ListItemModule { }
