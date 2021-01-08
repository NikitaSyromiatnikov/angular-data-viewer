import { DataService, DataElement } from '../data.service';
import { Component, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TableComponent {
  @Input() dataSource: DataElement[] = [];

  displayedColumns: string[] = ['company', 'name', 'balance', 'phone'];
  database: DataService | null;
  defaultItemsNumber: number = 5;

  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataService: DataService) { }

  // ngOnInit() {
  //   this.dataSource = this.dataService.getUsers(this.defaultItemsNumber);
  // }

  // ngAfterViewInit() {
  //   merge(this.paginator.page)
  //     .pipe(
  //       startWith(),
  //       switchMap(() => {
  //         this.isLoadingResults = true;
  //         return this.dataService.getUsers(this.paginator.pageSize);
  //       }),
  //       map(data => {
  //         this.isLoadingResults = false;
  //         return data;
  //       }),
  //       catchError(() => {
  //         this.isLoadingResults = false;
  //         return observableOf([]);
  //       }))
  //     .subscribe(data => this.dataSource = data);
  // }
}

