import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-booking-manage',
  templateUrl: './booking-manage.component.html',
  styleUrls: ['./booking-manage.component.css']
})
export class BookingManageComponent {
  @ViewChild('rescheduleDialog') rescheduleDialog!: TemplateRef<any>;

  upcomingBookings = [
    { id: 1, date: new Date('2024-09-10T10:00:00Z'), details: 'Lesson with John Doe' },
    { id: 2, date: new Date('2024-09-12T14:00:00Z'), details: 'Driving test practice' }
  ];

  pastBookings = [
    { id: 3, date: new Date('2024-08-15T10:00:00Z'), details: 'Lesson with Jane Smith' },
    { id: 4, date: new Date('2024-08-20T14:00:00Z'), details: 'Road safety seminar' }
  ];

  // Displayed columns for each tab
  displayedColumns: string[] = ['date', 'details', 'actions'];
  displayedColumnsForPastBookings: string[] = ['date', 'details'];

  rescheduleForm!: FormGroup;
  selectedBooking: any;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.createForm();
  }

  createForm() {
    this.rescheduleForm = this.fb.group({
      newDate: ['', Validators.required]
    });
  }

  viewDetails(booking: any) {
    // Implement the logic to view booking details
    console.log('Viewing details for booking:', booking);
  }

  cancelBooking(id: number) {
    // Implement the logic to cancel the booking
    this.upcomingBookings = this.upcomingBookings.filter(booking => booking.id !== id);
    console.log('Booking canceled with id:', id);
  }

  openRescheduleDialog(booking: any) {
    this.selectedBooking = booking;
    this.dialog.open(this.rescheduleDialog);
  }

  submitReschedule() {
    if (this.rescheduleForm.valid) {
      const newDate = this.rescheduleForm.value.newDate;
      this.selectedBooking.date = new Date(newDate);
      this.dialog.closeAll();
      console.log('Booking rescheduled to:', newDate);
    }
  }
}
