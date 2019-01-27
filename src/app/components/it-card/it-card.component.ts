import { Component, OnInit, Input } from '@angular/core';
import { IITXP } from '../../interfaces';

@Component({
  selector: 'it-card',
  templateUrl: './it-card.component.html',
  styleUrls: ['./it-card.component.scss']
})
export class ItCardComponent implements OnInit {

  @Input() itXP: IITXP;

  private isFlipped: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }


}
