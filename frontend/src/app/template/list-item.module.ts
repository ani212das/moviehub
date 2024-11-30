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


@NgModule({
  declarations: [UserListComponent, AdminListComponent],
  imports: [
    CommonModule,
    ListItemRoutingModule,
    ButtonModule,
    TableModule,
    CardModule,
    DialogModule,
    FormsModule,
    ProgressSpinnerModule,
    ReactiveFormsModule
  ]
})
export class ListItemModule { }
