import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Data, CreateUserRequest, User, UpdateUserRequest } from '../../models/user.model';
import { CommonModel } from '../../models/common.model';
import { BehaviorSubject, debounceTime } from 'rxjs';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  data: Data = { totalCount: 0, items: [] }; // Initialize `data`
  isEditMode = false; // Flag to indicate whether we are in edit mode
  SkipCount: number = 0; // Ensure it's always a number
  MaxResultCount: number = 10; // Set default number of results per page
  user: User = {
    userName: '',
    name: '',
    surname: '',
    emailAddress: '',
    isActive: false,
    fullName: '',
    roleNames: [],
    id: 0,
    lastLoginTime: null,
    creationTime: '',
  };

  isModalOpen = false;


  searchTerm: string = '';

  isActiveOptions = [
    { label: 'True', value: true },
    { label: 'False', value: false }
  ];
  selectedIsActive: boolean | null = null; // Holds the selected value from the dropdown

  private searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  


  constructor(private apiService: ApiService) {}


  ngOnInit(): void {
     this.fetchData(); // Fetch initial data
       // Subscribe to the searchSubject with debounce
    this.searchSubject
    .pipe(debounceTime(1000)) // Wait for 500ms after the last input
    .subscribe(() => {
      this.fetchData();
    });
  }

  onSearchChange(): void {
    // Emit the new search term to the subject
    this.searchSubject.next(this.searchTerm);
  }
  onSearchClick(): void {
    // Trigger search when clicking the button
    // this.applyFilter();
    
  }

  
  onFilterChange(): void {
    this.fetchData(); // Fetch data whenever the dropdown value changes
  }
  
  fetchData(): void {
    const keywordParam = this.searchTerm.trim() ? `?Keyword=${encodeURIComponent(this.searchTerm.trim())}&` : '';
    const isActiveParam = this.selectedIsActive !== null ? `${keywordParam ? '' : '?'}IsActive=${this.selectedIsActive}&` : '';
    const queryParams = `${keywordParam || isActiveParam ? '' : '?'}SkipCount=${this.SkipCount}&MaxResultCount=${this.MaxResultCount}`;
    this.apiService.getData(`User/GetAll${keywordParam}${isActiveParam}${queryParams}`).subscribe({
      next: (result) => {
        this.data = result; // Correctly assign `result` to `data`
        console.log(this.data, 'User data fetched');
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }

  /** Handle page change */
  onPageChange(event: any): void {
    this.SkipCount = event.first || 0; // Ensure SkipCount is a number
    this.MaxResultCount = event.rows;  // Set MaxResultCount based on event.rows
    this.fetchData();  // Fetch data with the updated SkipCount and MaxResultCount
  }

  createUserPayload: CreateUserRequest = {
    userName: '',
    name: '',
    surname: '',
    emailAddress: '',
    isActive: false,
    roleNames: [],
    password: '', // Include password
  };

  updateUserPayload: UpdateUserRequest = {
    userName: '',
    name: '',
    surname: '',
    emailAddress: '',
    isActive: false,
    fullName: '',
    lastLoginTime: null,
    creationTime: '',
    roleNames: [],
    id: 0,
  };

  fetchPostData(): void {
    if (this.isEditMode) {
      this.updateUserPayload = {
        userName: this.createUserPayload.userName,
        name: this.createUserPayload.name,
        surname: this.createUserPayload.surname,
        emailAddress: this.createUserPayload.emailAddress,
        isActive: this.createUserPayload.isActive,
        fullName: this.user.fullName,
        lastLoginTime: this.user.lastLoginTime,
        creationTime: this.user.creationTime,
        roleNames: this.user.roleNames,
        id: this.user.id,
      };
      this.apiService.updateUser('User/Update', this.updateUserPayload).subscribe({
        next: (response) => {
          this.fetchData();
          this.closeModal();
        },
        error: (error) => {
          console.error('Error updating user:', error);
        },
      });
    } else {
      this.apiService.postData('User/Create', this.createUserPayload).subscribe({
        next: (response) => {
          this.fetchData();
          this.closeModal();
        },
        error: (error) => {
          console.error('Error creating user:', error);
        },
      });
    }
  }

  /** Open the modal and reset input fields */
  openModal(isEdit: boolean = false, userId?: number): void {
    this.isEditMode = isEdit;
    if (!isEdit) {
      // Reset fields for adding a new user
      this.createUserPayload = {
        userName: '',
        name: '',
        surname: '',
        emailAddress: '',
        isActive: false,
        roleNames: [],
        password: '', // Default empty password for new user
      };
      this.isModalOpen = true; // Open modal
    } else if (userId) {
      // Fetch user data and populate fields for editing
      this.getEdit(userId);
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  getEdit(id: number): void {
    this.apiService.getDataById('User/Get', id).subscribe({
      next: (result) => {
        this.user = result; // Assign the response to `data`
        this.createUserPayload = {
          userName: this.user.userName,
          name: this.user.name,
          surname: this.user.surname,
          emailAddress: this.user.emailAddress,
          isActive: this.user.isActive,
          roleNames: this.user.roleNames,
          password: '', // Leave password empty for edit mode
        };
        this.isModalOpen = true;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }

  // Delete user
  delUser(id: number): void {
    this.apiService.deleteUserById('User/Delete', id).subscribe({
      next: (response) => {
        this.fetchData(); // Refresh the user list
        this.closeModal(); // Close modal after submission
      },
      error: (error) => {
        console.error('Error deleting user:', error);
      },
    });
  }
}
