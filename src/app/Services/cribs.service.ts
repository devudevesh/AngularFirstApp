import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as _ from 'lodash';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  constructor(private http : HttpClient) { }

  getAllCribs()
  {
     return this.http.get('Data/cribs.json')
     .pipe(map(res => _.values(res)));
  }

  getAllCribsFromAPI()
  {
    return this.http.get('http://localhost:5000/api/devesh/Cribs/GetAllCribs')
    .pipe(map(data => _.values(data)));
  }
}
