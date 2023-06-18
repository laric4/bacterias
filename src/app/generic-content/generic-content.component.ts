import { Component, Input } from '@angular/core';
import { ModalService } from '../modal/service/modal.service';

@Component({
  selector: 'app-generic-content',
  templateUrl: './generic-content.component.html',
  styleUrls: ['./generic-content.component.css'],
})
export class GenericContentComponent {
  @Input() title = '';
  @Input() description = '';
  constructor(private modalService: ModalService){}

  closeModal(){
    this.modalService.close();
  }
}
