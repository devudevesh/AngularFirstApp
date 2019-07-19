import { Component, OnInit, Input } from '@angular/core';
import { CribModel } from './../crib-model';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  @Input('crib') c: CribModel;
  constructor() { }

  ngOnInit() {
    
  }

}
