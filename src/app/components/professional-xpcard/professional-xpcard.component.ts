import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IProfessionalXP } from './../../interfaces';

@Component({
  selector: 'professional-xpcard',
  templateUrl: './professional-xpcard.component.html',
  styleUrls: ['./professional-xpcard.component.scss']
})
export class ProfessionalXPCardComponent implements OnInit {

  @Input() professionalXP: IProfessionalXP;

  public isCollapsed: boolean = true;
  private cardLink: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  toggleCard() {
    this.isCollapsed = !this.isCollapsed;
  }

}
