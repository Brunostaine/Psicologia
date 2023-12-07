import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
})
export class CardComponent implements OnInit {
  experiencia!: number;
  pacientesAtentidos!: any;
  cursosPorAno!: number

  constructor() {}

  ngOnInit() {
    this.experiencia = this.calcularAnosDeExperiencia();
    this.pacientesAtentidos = this.calcularPacientesAtentidos();
    this.cursosPorAno = this.calcularCursosPorAno();
  }

  calcularAnosDeExperiencia() {
    const dia = 7;
    const mes = 12;
    const ano = 2018;

    const anoInicial = new Date(ano, mes - 1, dia);

    const dataAtual = new Date();

    let experiencia = dataAtual.getFullYear() - anoInicial.getFullYear();

    if (
      dataAtual.getMonth() < anoInicial.getMonth() ||
      (dataAtual.getMonth() === anoInicial.getMonth() &&
        dataAtual.getDate() < anoInicial.getDate())
    ) {
      experiencia--;
    }

    return experiencia;
  }

  calcularPacientesAtentidos() {
    const experiencia = this.calcularAnosDeExperiencia();

    let pacientesAtentidos = experiencia * 200;

    return pacientesAtentidos;
  }

  calcularCursosPorAno() {
    const experiencia = this.calcularAnosDeExperiencia();

    let cursosPorAno = experiencia * 2;

    return cursosPorAno;
  }
}
