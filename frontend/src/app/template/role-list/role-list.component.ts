import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GetallRolesInputParamsModel, CreateRoleInputModel, RolesModel } from 'src/app/models/role.model';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
  providers: [ MessageService]
})
export class RoleListComponent {
  editMode: boolean = false;
  Rolesdata: RolesModel[] = [];
  selectedRoleData!: RolesModel | null;
  titleModel: string = '';
  submitbuttontitle: string = '';
  totalCount: number = 0;
  loading: boolean = false;
  showCreateEditRole = false;
  successMessage = '';
  errorMessage = '';
  form: FormGroup = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
    displayName: ['', [Validators.required]],
    normalizedName: ['', [Validators.required]],
    description: ['', []],
  });
  constructor(
    private rolesService: RoleService,
    private fb: FormBuilder,
    private messageService: MessageService,
  ) {
  }
  ngOnInit(): void {
    this.loading = true;
  }
  getallRoles(
    input: GetallRolesInputParamsModel = {} as GetallRolesInputParamsModel
  ) {
    this.rolesService.getallRoles(input).subscribe((res) => {
      this.Rolesdata = res.result.items;
      this.totalCount = res.result.totalCount;
      this.loading = false;
    });
  }
  loadRoles(event: any) {
    this.getallRoles({
      SkipCount: event.first,
      MaxResultCount: event.rows,
    } as GetallRolesInputParamsModel);
  }
  deleteRoleByid(id: number) {
    this.rolesService.deleteRoleByid(id).subscribe((res) => {
      if (res.success) {
        this.getallRoles();
        this.successMessage = 'Role successfully deleted';
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
      }
    }, error => {
      this.errorMessage = error?.error?.error?.message || 'Unknown error occurred';
      this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage });
    });
  }
  OpenCreateEditRoleDialog() {
    this.titleModel = 'CreateRole';
    this.submitbuttontitle = 'Create';
    this.form.reset();
    this.editMode = false;
    if (!this.editMode) {
      this.showCreateEditRole = true;
    }
  }
  cancel() {
    this.editMode = false;
    this.showCreateEditRole = false;
    this.selectedRoleData = null;
    this.form.reset();
  }
  createEditRole() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      if (this.editMode) {
        let input: CreateRoleInputModel = {
          id: this.form.controls['id'].value,
          name: this.form.controls['name'].value,
          displayName: this.form.controls['displayName'].value,
          description: this.form.controls['description'].value,
          normalizedName: this.form.controls['normalizedName'].value,
        } as CreateRoleInputModel;
        this.update(input);
      } else {
        let input: CreateRoleInputModel = {
          id: this.form.controls['id'].value,
          name: this.form.controls['name'].value,
          displayName: this.form.controls['displayName'].value,
          description: this.form.controls['description'].value,
          normalizedName: this.form.controls['normalizedName'].value
        } as CreateRoleInputModel;
        this.create(input);
      }
      this.showCreateEditRole = false;
      this.selectedRoleData = null;
      this.form.reset();
    }
  }
  create(input: CreateRoleInputModel) {
    this.rolesService.createRole(input).subscribe((res) => {
      if (res.success) {
        this.getallRoles();
        this.successMessage = 'Role successfully created';
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
      }
    }, error => {
      this.errorMessage = error?.error?.error?.message || 'Unknown error occurred';
      this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage });
    });
  }
  update(input: CreateRoleInputModel) {
    this.rolesService.updateRole(input).subscribe((res) => {
      if (res.success) {
        this.getallRoles();
        this.successMessage = 'Role successfully updated';
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.successMessage });
      }
    }, error => {
      this.errorMessage = error?.error?.error?.message || 'Unknown error occurred';
      this.messageService.add({ severity: 'error', summary: 'Error', detail: this.errorMessage });
    });
  }
  openUpdateUi(RoleData: RolesModel) {
    this.titleModel = 'UpdateRole';
    this.submitbuttontitle = 'Update';
    this.form.reset();
    this.editMode = true;
    this.getRole(RoleData.id);
    if (this.editMode) {
      this.showCreateEditRole = true;
    }
  }
  getRole(id: number) {
    this.rolesService.getRoleById(id).subscribe((res) => {
      if (res.success) {
        this.form.controls['id'].patchValue(res.result.id);
        this.form.controls['name'].patchValue(res.result.name);
        this.form.controls['displayName'].patchValue(res.result.displayName);
        this.form.controls['description'].patchValue(res.result.description);
        this.form.controls['normalizedName'].patchValue(res.result.normalizedName);
      }
    });
  }
  passRoleData(Roledata: RolesModel) {
    this.selectedRoleData = Roledata;
  }
}
