import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from 'src/app/sidebar/user/user.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { Button, ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [HttpClientModule,FormsModule,CommonModule,  TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule, 
    BrowserAnimationsModule,
    PaginatorModule
  ],
  exports: [UserComponent ]
})
export class SharedModule { }
