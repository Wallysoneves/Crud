import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ComponentsComponent } from './components/components.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  declarations: [ComponentsComponent, ErrorDialogComponent, CategoryPipe],
  imports: [CommonModule, MatDialogModule],
  exports: [ErrorDialogComponent, CategoryPipe],
})
export class SharedModule {}
