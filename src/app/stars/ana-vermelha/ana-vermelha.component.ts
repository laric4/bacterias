import { Component } from '@angular/core';
import { GenericContentComponent } from 'src/app/generic-content/generic-content.component';
import { ModalService } from 'src/app/modal/service/modal.service';

@Component({
  selector: 'app-ana-vermelha',
  templateUrl: './ana-vermelha.component.html',
  styleUrls: ['./ana-vermelha.component.css'],
  standalone: true
})
export class AnaVermelhaComponent {
  descriptions = {
    oQue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare rhoncus mauris et elementum. Sed rhoncus sollicitudin felis vel vulputate. Maecenas dapibus sit amet ante eget efficitur. Vestibulum finibus auctor nisi, at cursus purus dapibus et. Aenean quam erat, egestas ac mi sed, tempus ultricies lorem. Aliquam id pellentesque felis. Donec vel justo ut leo faucibus porta imperdiet non eros. Sed non justo sit amet mauris condimentum varius. Pellentesque porta dui vel feugiat cursus. Vestibulum eget est ipsum. Suspendisse potenti. Maecenas commodo est sollicitudin, fermentum ante eu, bibendum est. Proin eu quam tristique, pretium metus eu, finibus nulla. Nullam dictum bibendum leo at gravida. Nunc tincidunt aliquet tortor a pulvinar. Etiam sit amet lacus quis tortor dapibus egestas ut pulvinar nisi. In et sollicitudin elit. Suspendisse faucibus faucibus nunc, vitae iaculis sapien imperdiet nec. Sed tempor erat nec tellus porta, nec venenatis ex fringilla. Suspendisse et ultrices augue, sit amet congue dui. Nullam sit amet massa et dolor luctus euismod vitae id dolor. Nunc commodo finibus sapien. Nam semper quis nulla et congue.',
    tempoFusao: '',
    composicao: '',
    cicloVida: '',
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
