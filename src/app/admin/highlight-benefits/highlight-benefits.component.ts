import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Benefit {
  id: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-highlight-benefits',
  templateUrl: './highlight-benefits.component.html',
  styleUrls: ['./highlight-benefits.component.css']
})
export class HighlightBenefitsComponent {
  benefits: Benefit[] = [];
  dataSource = new MatTableDataSource<Benefit>(this.benefits);
  benefitForm: FormGroup;
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.benefitForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addOrUpdateBenefit() {
    if (this.benefitForm.valid) {
      const benefit: Benefit = this.benefitForm.value;
      if (this.editingIndex !== null) {
        // Update existing benefit
        this.benefits[this.editingIndex] = {
          ...benefit,
          id: this.benefits[this.editingIndex].id,
        };
        this.snackBar.open('Benefit updated successfully', 'Close', {
          duration: 2000,
        });
      } else {
        // Add new benefit
        benefit.id = this.benefits.length + 1;
        this.benefits.push(benefit);
        this.snackBar.open('Benefit added successfully', 'Close', {
          duration: 2000,
        });
      }
      this.dataSource.data = this.benefits;
      this.resetForm();
    }
  }

  editBenefit(index: number) {
    this.editingIndex = index;
    const benefit = this.benefits[index];
    this.benefitForm.setValue({
      title: benefit.title,
      description: benefit.description,
    });
  }

  deleteBenefit(index: number) {
    this.benefits.splice(index, 1);
    this.dataSource.data = this.benefits;
    this.snackBar.open('Benefit deleted successfully', 'Close', {
      duration: 2000,
    });
  }

  resetForm() {
    this.benefitForm.reset();
    this.editingIndex = null;
  }
}
