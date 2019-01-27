import { Component, OnInit, Input } from '@angular/core';
import { IBusinessCard } from '../../interfaces';
@Component({
  selector: 'business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {

  @Input() businessCardConfig: IBusinessCard;

  constructor() { }

  ngOnInit() {
  }

}
