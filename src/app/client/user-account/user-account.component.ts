import { Component } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890'
  };

  passwords = {
    current: '',
    new: '',
    confirm: ''
  };

  paymentHistory = [
    { date: new Date(), amount: 100, status: 'Completed' },
    { date: new Date(), amount: 50, status: 'Pending' },
    { date: new Date(), amount: 75, status: 'Completed' }
  ];

  displayedColumns: string[] = ['date', 'amount', 'status'];

  notifications = [
    { message: 'Your payment has been processed.', read: false },
    { message: 'Reminder: Your course starts tomorrow.', read: false }
  ];

  updateUserInfo() {
    // Logic to update user information
    console.log('User information updated:', this.user);
  }

  changePassword() {
    // Logic to change user password
    if (this.passwords.new === this.passwords.confirm) {
      console.log('Password changed successfully!');
    } else {
      console.error('Passwords do not match.');
    }
  }

  markAsRead(notification: any) {
    notification.read = true;
  }

  deleteNotification(notification: any) {
    this.notifications = this.notifications.filter(n => n !== notification);
  }
}
