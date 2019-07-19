import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CribModel } from './../crib-model';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any> ;
  customers: Array<any>;
  showDetails: boolean;
  constructor(private http : HttpClient) { }

  ngOnInit() {
    
  }

}
