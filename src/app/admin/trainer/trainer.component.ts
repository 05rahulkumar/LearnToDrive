import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Trainer {
  id: number;
  name: string;
  contact: string;
  experience: string;
}
@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent {
  trainers: Trainer[] = [];
  dataSource = new MatTableDataSource<Trainer>(this.trainers);
  trainerForm: FormGroup;
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.trainerForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      experience: ['', Validators.required],
    });
  }

  addOrUpdateTrainer() {
    if (this.trainerForm.valid) {
      const trainer: Trainer = this.trainerForm.value;
      if (this.editingIndex !== null) {
        // Update existing trainer
        this.trainers[this.editingIndex] = {
          ...trainer,
          id: this.trainers[this.editingIndex].id,
        };
        this.snackBar.open('Trainer updated successfully', 'Close', {
          duration: 2000,
        });
      } else {
        // Add new trainer
        trainer.id = this.trainers.length + 1;
        this.trainers.push(trainer);
        this.snackBar.open('Trainer added successfully', 'Close', {
          duration: 2000,
        });
      }
      this.dataSource.data = this.trainers;
      this.resetForm();
    }
  }

  editTrainer(index: number) {
    this.editingIndex = index;
    const trainer = this.trainers[index];
    this.trainerForm.setValue({
      name: trainer.name,
      contact: trainer.contact,
      experience: trainer.experience,
    });
  }

  deleteTrainer(index: number) {
    this.trainers.splice(index, 1);
    this.dataSource.data = this.trainers;
    this.snackBar.open('Trainer deleted successfully', 'Close', {
      duration: 2000,
    });
  }

  resetForm() {
    this.trainerForm.reset();
    this.editingIndex = null;
  }
}
