import { Component, OnInit } from '@angular/core';
import { AdminDataService } from 'src/app/services/admin-data.service';
import { adminResponse } from 'src/app/models/roleInterface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss'],
})
export class AdminListComponent implements OnInit {
  adminForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  users!: adminResponse[];
  totalcount: string = '';
  isLoading: boolean = true;
  showModal: boolean = false;
  roleDialog: boolean = true;
  constructor(
    private adminData: AdminDataService,
    private formbuilder: FormBuilder
  ) {
    this.adminForm = this.formbuilder.group({
      name: ['', Validators.required],
      displayName: ['', Validators.required],
      description: ['Write something about this topic'],
    });
  }

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  onSubmit(): void {
    if (this.adminForm.valid) {
      const formValue = this.adminForm.value;

      // Ensure roleNames is an array
      const formattedData = {
        ...formValue,
        roleNames: formValue.roleNames
          .split(',')
          .map((role: string) => role.trim()),
      };

      this.adminData.createuser(formattedData).subscribe(
        () => {
          this.successMessage = 'User created successfully.';
          this.fetchAllUsers();
          this.closemodal();
        },
        (error) => {
          this.errorMessage = 'Failed to create user.';
          console.error(error);
        }
      );
    }
  }
  fetchAllUsers(): void {
    this.adminData.GetAllUser().subscribe(
      (res) => {
        this.users = res.result.items;
        this.totalcount = res.result.totalCount;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to fetch users.';
        console.error('Error fetching users:', error);
      }
    );
  }
  closemodal(): void {
    this.showModal = false;
  }

  // Hide dialog
  hideDialog(): void {
    this.roleDialog = false;
  }

  
}
