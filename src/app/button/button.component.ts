import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
})
export class ButtonComponent {
  @Input() typename: string = 'teste';
  @Output() onClick = new EventEmitter<void>();

  constructor() {}

  handleClick() {
    this.onClick.emit();
  }
}
