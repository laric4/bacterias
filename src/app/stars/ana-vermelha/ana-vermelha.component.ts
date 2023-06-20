import { Component } from '@angular/core';
import { GenericContentComponent } from 'src/app/generic-content/generic-content.component';
import { ModalService } from 'src/app/modal/service/modal.service';
import { ButtonComponent } from "../../button/button.component";

@Component({
    selector: 'app-ana-vermelha',
    templateUrl: './ana-vermelha.component.html',
    styleUrls: ['./ana-vermelha.component.css'],
    standalone: true,
    imports: [ButtonComponent]
})
export class AnaVermelhaComponent {
  descriptions = {
    oQue: 'Uma anã vermelha é uma das menores e mais frias estrelas da sequência principal. As anãs vermelhas são o tipo mais comum de estrela na Via Láctea, pelo menos na vizinhança do Sol, mas por causa de sua baixa luminosidade, as anãs vermelhas individuais não podem ser facilmente observadas.',
    tempoFusao: 'Alguns milhões de anos após seu nascimento, o núcleo central de uma estrela atinge uma temperatura alta o suficiente para suportar reações nucleares sustentadas, gerando energia pela fusão de hidrogênio em hélio. As anãs vermelhas são muito mais fracas e acumulam seu combustível nuclear por longos períodos de tempo. Assim, enquanto uma estrela do tipo solar pode queimar hidrogênio por apenas cerca de 10 bilhões de anos, algumas anãs vermelhas podem fazê-lo por trilhões de anos.',
    composicao: 'A composição química das anãs vermelhas é semelhante à do nosso Sol, com cerca de 74% de hidrogênio e 24% de hélio em massa. No entanto, elas também contêm pequenas quantidades de outros elementos mais pesados, como carbono, oxigênio, nitrogênio, silício, ferro e outros elementos encontrados na tabela periódica.',
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
