import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usersUrl = 'http://192.168.1.173:3000/api/users';
  private userUrl = 'http://192.168.1.173:3000/user';

  private _dataSource$: BehaviorSubject<DataElement[]> = new BehaviorSubject([]);

  dataSource$ = this._dataSource$.asObservable();

  constructor(private http: HttpClient) {

  }

  getDataElements(): Observable<DataElement[]> {
    return this.http.get<DataElement[]>(this.usersUrl).pipe(
      tap(res => {
        console.log('got response');
        this.hanleResponse(res);
      })
    );
  }

  hanleResponse(res: DataElement[]): void {
    this._dataSource$.next(res);
    console.log('handled response');
  }

  getAllUsers(): Observable<DataElement[]> {
    return this.http.get<DataElement[]>(this.usersUrl);
  }

  getUsers(quantity: number): Observable<DataElement[]> {
    const request: string = `${this.usersUrl}/${quantity}`;
    return this.http.get<DataElement[]>(request);
  }

  getUser(id: string): Observable<DataElement> {
    const request: string = `${this.userUrl}/${id}`;
    return this.http.get<DataElement>(request);
  }
}

export interface DataElement {
  _id: string;
  balance: string;
  picture: string;
  age: number;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
};

export interface DataElementState {
  elements: DataElement[],
  page: number
};