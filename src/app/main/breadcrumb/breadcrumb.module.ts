import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb.component';
import { NgZorroAntdModule } from 'ng-cosmos-ui';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgZorroAntdModule
  ],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule { }
