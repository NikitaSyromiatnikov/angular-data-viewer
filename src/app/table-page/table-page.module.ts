import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablePageRoutingModule } from './table-page-routing.module';
import { TablePageComponent } from './table-page.component';
import { TableComponent } from '../table/table.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TablePageComponent, TableComponent],
  imports: [
    CommonModule,
    TablePageRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class TablePageModule { }
