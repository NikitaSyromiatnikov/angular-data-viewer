import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { DataElement, DataService } from '../data.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {
  dataSource$: Observable<DataElement[]> = this.dataService.dataSource$;
  page: number = 0;
  pageSizeOptions: number[] = [5, 10, 20]

  constructor(private dataService: DataService) { 
    // this.dataSource$ = this.dataService.getAllUsers();
  }

  ngOnInit(): void {
    this.fetchData();
    this.dataSource$.forEach(next => {
      console.log('dataSource$');
      console.log(next);
    });
    console.log('data fetched');
    console.log(this.dataSource$)
  }

  fetchData() {
    this.dataService.getDataElements().pipe(first()).subscribe();
  }

  nextPage() {
    this.page++;
    this.fetchData();
  }

  previousPage() {
    this.page--;
    this.fetchData();
  }
}
