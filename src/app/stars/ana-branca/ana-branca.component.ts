import { Component } from '@angular/core';
import { GenericContentComponent } from 'src/app/generic-content/generic-content.component';
import { ModalService } from 'src/app/modal/service/modal.service';
import { ButtonComponent } from "../../button/button.component";

@Component({
    selector: 'app-ana-branca',
    templateUrl: './ana-branca.component.html',
    styleUrls: ['./ana-branca.component.css'],
    standalone: true,
    imports: [ButtonComponent]
})
export class AnaBrancaComponent {
  descriptions = {
    oQue: ' Uma anã branca é o estágio final de evolução de uma estrela de massa baixa ou média, como o nosso Sol. Após esgotar seu combustível nuclear, a estrela passa por uma série de transformações, eventualmente se tornando uma anã branca.As anãs brancas são estrelas muito densas e compactas. Elas são compostas principalmente por carbono e oxigênio, com uma pequena quantidade de hélio e traços de outros elementos. O seu tamanho é comparável ao da Terra, mas sua massa é cerca de uma vez e meia a duas vezes a massa do Sol.',
    composicao: 'Além de carbono e oxigênio, anãs brancas também podem conter traços de elementos mais pesados, como nitrogênio, néon, magnésio e outros elementos encontrados na tabela periódica.',
    informacoesgerais: 'Classe espectral: A ou B, Temperatura: 5.000 a 30.000, Exemplos de anãs brancas: Procyon B e Van Maanen 2.',
  };
  constructor(private modalService: ModalService) {}

  openModal(title: string, description: string) {
    this.modalService
      .open(GenericContentComponent, {
        title: title,
        description: description,
      })
      .subscribe();
  }
}
