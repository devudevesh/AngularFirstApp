import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

interface Customer {
    Id: number;
    Name: string;
}


@Component({
    selector: 'api-response',
    template: `
    <ul *ngIf="customer$ | async as customer else noData">
        <li *ngFor="let customer of customer">
            {{customer.name}}
        </li> 
    </ul>
    <ng-template #noData>No Data Available</ng-template>
`,
    styleUrls: ['api-response.component.css']
})

export class ApiResponseComponent implements OnInit {

    customer$: Observable<Customer[]>;


    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.customer$ = this.http.get<Customer[]>('http://localhost:5000/api/devesh/customer/GetAll')
            .pipe(map(data => _.values(data)));
    }
}
