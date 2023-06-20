import { Component } from '@angular/core';
import { GenericContentComponent } from 'src/app/generic-content/generic-content.component';
import { ModalService } from 'src/app/modal/service/modal.service';
import { ButtonComponent } from "../../button/button.component";

@Component({
    selector: 'app-gigante-azul',
    templateUrl: './gigante-azul.component.html',
    styleUrls: ['./gigante-azul.component.css'],
    standalone: true,
    imports: [ButtonComponent]
})
export class GiganteAzulComponent {
  descriptions = {
    oQue: 'As estrelas azuis são de longe as maiores e mais brilhantes estrelas da galáxia, pois a luz azul carrega mais energia do que a luz vermelha, o que significa que precisa de uma fonte de radiação mais quente para produzi-la.',
    tempoFusao: 'Uma gigante azul, caracterizada por ser uma estrela muito quente e luminosa, geralmente têm massas superiores a massa do Sol. Com base nessa massa, a estrela terá uma contração e aquecimento rápidos, o que acelera o processo de fusão nuclear. A duração exata desse processo pode variar de algumas centenas de milhares a alguns milhões de anos.',
    composicao: 'As gigantes azuis são compostas principalmente por hidrogênio (H) e hélio (He), que são os elementos mais abundantes no Universo. No entanto, elas também contêm pequenas quantidades de outros elementos mais pesados, como carbono (C), oxigênio (O), nitrogênio (N), silício (Si), ferro (Fe) e muitos outros.',
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
