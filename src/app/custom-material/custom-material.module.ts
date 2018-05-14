import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatListModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
