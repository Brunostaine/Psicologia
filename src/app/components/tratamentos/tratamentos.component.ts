import { Component, Input, OnInit } from '@angular/core';
import { Tratamento } from '../../shared/models/tratamentos';

@Component({
  selector: 'app-tratamentos',
  templateUrl: './tratamentos.component.html',
  styleUrls: ['./tratamentos.component.css'],
  standalone: true,
})
export class TratamentosComponent implements OnInit {
  @Input() title?: string;
  @Input() image?: string;
  @Input() description?: string;
  constructor() {}

  ngOnInit() {}


}
