import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() mostrarHeader: boolean = true;
  @Input() mostrarBoton: boolean = false;

  @Input() nombre!: String;
  @Input() siglas!: String;
  @Input() seccion!: String;
  constructor() { }

  ngOnInit() {}

}
