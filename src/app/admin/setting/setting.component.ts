
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  @ViewChild('editPermissionsDialog') editPermissionsDialog!: TemplateRef<any>;

  siteSettingsForm!: FormGroup;
  securitySettingsForm!: FormGroup;
  editPermissionsForm!: FormGroup;

  roles = ['Admin', 'Instructor', 'Student'];
  availablePermissions = [
    { name: 'Manage Courses', enabled: true },
    { name: 'View Reports', enabled: false },
    // Add more permissions as needed
  ];

  permissions = new MatTableDataSource([
    { role: 'Admin', permissions: this.availablePermissions },
    { role: 'Instructor', permissions: [{ name: 'Manage Courses', enabled: false }] },
    { role: 'Student', permissions: [{ name: 'View Reports', enabled: true }] }
  ]);

  permissionsColumns: string[] = ['role', 'permissions'];

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.createForms();
  }

  createForms() {
    this.siteSettingsForm = this.fb.group({
      paymentGatewayApiKey: [''],
      smtpServer: [''],
      smtpPort: [25, Validators.required],
      smtpUser: [''],
      smtpPassword: ['']
    });

    this.securitySettingsForm = this.fb.group({
      twoFactorAuth: [false],
      maxLoginAttempts: [5, Validators.required],
      lockoutDuration: [15, Validators.required]
    });

    this.editPermissionsForm = this.fb.group({
      role: ['', Validators.required]
    });
  }

  saveSiteSettings() {
    // Implement save logic for site settings
    console.log('Site settings saved:', this.siteSettingsForm.value);
  }

  saveSecuritySettings() {
    // Implement save logic for security settings
    console.log('Security settings saved:', this.securitySettingsForm.value);
  }

  editPermissions() {
    this.dialog.open(this.editPermissionsDialog);
  }

  savePermissions() {
    // Implement save logic for permissions
    console.log('Permissions updated:', this.editPermissionsForm.value);
  }
}
