import { ApiManagementComponent } from './../api-management/api-management.component';
import { ApiManagementService } from './api-management.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-cosmos-ui';
const routes: Routes = [
    {
        path: '',
        component: ApiManagementComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApiManagementComponent],
  providers: [ApiManagementService]
})
export class ApiManagementModule { }
