import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  @Input() totalIngresos: number;
  @Input() totalEgresos: number;
  @Input() porcentajeTotal: number;
  @Input() presupuestoTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
