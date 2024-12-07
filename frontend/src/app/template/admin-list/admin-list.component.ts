import { Component, OnInit } from '@angular/core';
import { AdminDataService } from 'src/app/services/admin-data.service';
import { adminResponse, updateRole } from 'src/app/models/roleInterface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss'],
})
export class AdminListComponent implements OnInit {
  successMessage: string | null = null;
  errorMessage: string | null = null;
  users!: adminResponse[];
  totalcount: string = '';
  isLoading: boolean = true;
  showModal: boolean = false;
  showDetailModal: boolean = false;
  roleDialog: boolean = false;
  userDialog: boolean = false;
  selectedUser: adminResponse[] | null = null;
  isEditMode: boolean = false;
  showUpdateModal: boolean = false;
  selectedRoleId: number | null = null;
  visible: boolean = false;
  roleForm: FormGroup;
  roleDetails: adminResponse | null = null;
  updatedUserRole: updateRole = {
  id:0,
  name: "",
  displayName: "",
  normalizedName: "",
  description: "",
  grantedPermissions: [],
  };


  constructor(
    private adminData: AdminDataService, private formbuilder: FormBuilder ) {

    this.roleForm = this.formbuilder.group({
      name: ['', Validators.required],
      displayName: ['', Validators.required],
      normalizedName: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  // Open modal
  openModel() {
    this.showModal = true;
    this.isEditMode = true;
  }
   // Open dialog for edit or update
 openModal(update: any, users?: adminResponse): void {
  // this.isEditMode = isEditMode;
  this.showUpdateModal = true;
  this.users = update;

//   if (isEditMode && users) {
//     this.selectedRoleId = users.id;
//     this.roleForm.patchValue(users); // Prefill form with selected role data
//   } else {
//     this.selectedRoleId = null;
//     this.roleForm.reset(); // Reset form for new role
//   }
}

  // Close modal
  closeModal() {
    this.showModal = false;
    this.roleForm.reset(); // Reset form
  }
  onSubmit() {
    if (this.roleForm.valid) {
      debugger
      const roleData = this.roleForm.value;
      // console.log('Form Data:', roleData);
      
      // Call API to save the role
      this.adminData.createuser(roleData).subscribe(response => {
        console.log('Role saved successfully', response);
        this.successMessage = "Role is Created Successfully";
        this.fetchAllUsers();
        this.closeModal();
      }, error => {
        console.error('Error saving role', error);
      });
    } else {
      this.errorMessage = "Failed to create Role";
      console.error('Form is invalid');
    }
  }

  showDialog() {
    this.visible = true;
  }
  fetchAllUsers(): void {
    this.adminData.GetAllUser().subscribe(
      (res) => {
        this.users = res.result.items;
        this.totalcount = res.result.totalCount;
        this.isLoading = false;
        console.log('user',this.users)
      },
      (error) => {
        this.errorMessage = 'Failed to fetch users.';
        console.error('Error fetching users:', error);
      }
    );
  }
   // Placeholder methods
  //  editRole(role: any) {
    // console.log('Edit role:', role);
    // this.roleForm = role;
    // this.showDetailModal = true;
  // }

  fetchRoleDetails(id: number): void {
    this.adminData.getRoleDetails(id).subscribe(
      (response) => {
        if (response.success) {
          this.roleDetails = response.result;
          console.log('Role Details:', this.roleDetails);
          this.showDetailModal = true;
        } else {
          console.error('Failed to fetch role details', response.error);
        }
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }

  deleteRole(id: number): void {
    if (confirm('Are you sure you want to delete this role?')) {
      this.adminData.deleteRole(id).subscribe(
        (response) => {
          if (response.success) {
            alert('Role deleted successfully!');
            // Optionally refresh the role list here
            this.showUpdateModal = true;
            this.fetchAllUsers();
          } else {
            this.errorMessage = "Failed to delete role";
            console.error('Failed to delete role', response.error);
          }
        },
        (error) => {
          this.errorMessage = "('API Error:'),error";
          console.error('API Error:', error);
        }
      );
    }
  }

  // onEdit(data: any): void{
  //   debugger;
  //   this.roleForm = data;
  //   debugger;
  //   this.showDetailModal = true;
  // }

  onUpdate(): void {
    console.log("done");
    // if (this.roleForm.valid) {
      // const role: Role = this.roleForm.value;
      if (this.roleForm.valid && this.selectedUser) {
      const updatedUser = {
        ...this.selectedUser,
        ...this.roleForm.value,
        roleNames: this.roleForm.value.roleNames.split(',').map((role: string) => role.trim()),
      };
      console.log(updatedUser);

      this.adminData.updateRole(updatedUser).subscribe(
        (response) => {
          if (response.success) {
            alert('Role updated successfully!');
            // Optionally refresh the role list or reset the form
            // this.showUpdateModal = true;
            this.fetchAllUsers();
          } else {
            console.error('Failed to update role', response.error);
          }
        },
        (error) => {
          console.error('API Error:', error);
        }
      );
    }
  }

}
