import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatStepperModule } from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import this module

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSortModule,
    ClipboardModule,
    DragDropModule,
    ScrollingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressBarModule,
    MatChipsModule,
    CdkStepperModule,
    MatSelectModule,
    MatCardModule,MatGridListModule,MatListModule,MatTableModule,
    MatMenuModule,MatSnackBarModule,
    MatSidenavModule,MatExpansionModule,MatTabsModule,MatDialogModule,MatDatepickerModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSortModule,
    ClipboardModule,
    DragDropModule,
    ScrollingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressBarModule,
    MatChipsModule,
    CdkStepperModule,
    MatSelectModule,
    MatCardModule,MatGridListModule,MatListModule,MatTableModule,
    MatMenuModule,MatSnackBarModule,
    MatSidenavModule,MatExpansionModule,MatTabsModule,MatDialogModule,MatDatepickerModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class MaterialModule {}