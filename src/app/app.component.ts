import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CicloDasEstrelas';
  form!: FormGroup;
  exibir: string = '';

  ngOnInit(): void {
    this.form = new FormGroup({
      massa: new FormControl(),
    });
  }

  getMassa(form: FormGroup) {
    let M = form.value.massa;
    if (0.08 <= M && M <= 0.45) {
      this.exibir = 'primeiro';
    } else if (0.45 < M && M <= 8) {
      this.exibir = 'segundo';
    } else if (8 < M && M <= 25) {
      this.exibir = 'terceiro';
    } else if (25 < M && M <= 100) {
      this.exibir = 'quarto';
    } else {
      alert('Valor inválido');
    }
  }
}
