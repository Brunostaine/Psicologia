import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { TratamentosComponent } from '../../components/tratamentos/tratamentos.component';
import { Tratamento } from '../../shared/models/tratamentos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, CardComponent, TratamentosComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  cards: Tratamento[] = [
    {
      image: '../../../assets/images/image-1.jpg',
      title: 'Neuropsicologia',
      description:
        'Neuropsicologia é uma disciplina que investiga como as funções cognitivas e emocionais estão relacionadas à estrutura e funcionamento do cérebro. Ela examina como lesões ou disfunções cerebrais podem afetar o comportamento, a cognição, as emoções e as habilidades motoras, utilizando testes e avaliações para compreender a relação entre o cérebro e o comportamento.',
    },
    {
      image: '../../../assets/images/image-2.jpg',
      title: 'Terapia Cognitivo-Comportamental (TCC)',
      description:
        'A TCC é uma abordagem prática e orientada para soluções que se concentra na identificação e modificação de padrões de pensamento e comportamento disfuncionais, visando melhorar o estado emocional.',
    },
    {
      image: '../../../assets/images/image-3.jpg',
      title: 'Psicoterapia',
      description:
        'Psicoterapia é um processo terapêutico no qual um profissional de saúde mental, como um psicólogo ou psiquiatra, utiliza técnicas e abordagens específicas para ajudar indivíduos a compreenderem seus pensamentos, emoções e comportamentos. O objetivo é promover mudanças positivas, aliviar o sofrimento emocional, e melhorar a qualidade de vida. Existem diversas abordagens na psicoterapia, como a Terapia Cognitivo-Comportamental, a Psicanálise, a Humanista, entre outras, cada uma com suas características e técnicas distintas.',
    },
    {
      image: '../../../assets/images/image-4.jpg',
      title: 'Abordagens Integrativas',
      description:
        'As abordagens integrativas combinam diferentes técnicas e métodos terapêuticos de diversas escolas psicológicas para criar uma abordagem personalizada, adaptada às necessidades específicas de cada cliente. Pode envolver elementos de diversas teorias para um tratamento mais abrangente.',
    },
  ];
}
