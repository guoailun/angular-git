import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import { NgZorroAntdModule } from 'ng-cosmos-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
    BreadcrumbModule
  ],
  declarations: [TopComponent],
  exports: [TopComponent]
})
export class TopModule { }
