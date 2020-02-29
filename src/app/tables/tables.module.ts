import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { RouterModule, Routes } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  { path: 'basic-table', component: BasicTableComponent }
]

@NgModule({
  declarations: [BasicTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule
  ]
})
export class TablesModule { }
