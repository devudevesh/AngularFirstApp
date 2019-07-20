import { Component, OnInit } from '@angular/core';
//import { map } from 'rxjs/operators';
//import { HttpClient } from '@angular/common/http';
import { CribsService } from './../Services/cribs.service';
//import * as _ from 'lodash';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any> ;
  error: string;
  showDetails: boolean;
  constructor(
    //private http : HttpClient,
    private CribService : CribsService 
    ) { }

  ngOnInit() {
   /* this.http.get('Data/cribs.json')
    .pipe(map(res => _.values(res)))
    .subscribe(data => this.cribs = data);*/

    this.CribService.getAllCribs().subscribe(
      data => this.cribs = data,
      error => this.error = error.statusText
      );
  }

}
