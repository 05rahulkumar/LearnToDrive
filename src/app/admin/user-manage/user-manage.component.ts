import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent {
  @ViewChild('userDetailsDialog') userDetailsDialog!: TemplateRef<any>;

  users = new MatTableDataSource([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Student', joinedDate: new Date('2024-01-15') },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Instructor', joinedDate: new Date('2024-02-20') }
  ]);

  queries = new MatTableDataSource([
    { userName: 'John Doe', content: 'Question about course schedule', status: 'Pending' },
    { userName: 'Jane Smith', content: 'Issue with payment', status: 'Resolved' }
  ]);

  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];
  queryColumns: string[] = ['user', 'query', 'status', 'actions'];

  selectedUser: any;

  constructor(public dialog: MatDialog) { }

  applyFilter(filterValue: any) {
    this.users.filter = filterValue.value.trim().toLowerCase();
  }

  viewUserDetails(user: any) {
    this.selectedUser = user;
    this.dialog.open(this.userDetailsDialog);
  }

  deactivateUser(userId: number) {
    // Implement user deactivation logic
    console.log('Deactivating user with id:', userId);
  }

  respondToQuery(query: any) {
    // Implement query response logic
    console.log('Responding to query:', query);
  }
}
