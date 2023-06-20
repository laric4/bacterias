import { ModalService } from './../../modal/service/modal.service';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { GenericContentComponent } from 'src/app/generic-content/generic-content.component';

@Component({
  selector: 'app-nebulosa',
  templateUrl: './nebulosa.component.html',
  styleUrls: ['./nebulosa.component.css'],
  standalone: true,
  imports: [ButtonComponent],
})
export class NebulosaComponent {
  descriptions = {
    oQue: 'Nebulosas são nuvens formadas por poeira cósmica, hidrogênio e gases ionizados. A poeira cósmica que compõe esses corpos celestes pode aglutinar-se pela ação gravitacional. Assim, a união dos materiais que formam a nebulosa pode dar origem à formação de uma estrela. Por esse motivo, as nebulosas são chamadas de berços de estrelas.',
    tempoFusao: 'Em certo ponto, um núcleo formado por essas partículas começa a ter temperaturas e pressões suficientes para realizar fusões entre átomos, que, por sua vez, levam à emissão de ondas eletromagnéticas capazes de excitar a massa de gás ao seu redor, que passa a emitir radiação eletromagnética em comprimentos de ondas visíveis.',
    composicao: 'poeira cósmica e gases, como hélio e hidrogênio',
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
