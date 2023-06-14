import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  ciclo!: any;
  title = 'CicloDasEstrelas';
  exibir: string = '';

  nebulosaoQueE: boolean = false;
  nebulosaComposicao: boolean = false;
  nebulosaTempoFusao: boolean = false;
  nebulosaCicloVida: boolean = false;

  protoEstrelaoQueE: boolean = false;
  protoEstrelaComposicao: boolean = false;
  protoEstrelaTempoFusao: boolean = false;
  protoEstrelaCicloVida: boolean = false;

  anavermelhaoQueE: boolean = false;
  anavermelhaComposicao: boolean = false;
  anavermelhaTempoFusao: boolean = false;
  anavermelhaCicloVida: boolean = false;

  anabrancaoQueE: boolean = false;
  anabrancaComposicao: boolean = false;
  anabrancaTempoFusao: boolean = false;
  anabrancaCicloVida: boolean = false;

  gigantevermelhaoQueE: boolean = false;
  gigantevermelhaComposicao: boolean = false;
  gigantevermelhaTempoFusao: boolean = false;
  gigantevermelhaCicloVida: boolean = false;

  supergigantevermelhaoQueE: boolean = false;
  supergigantevermelhaComposicao: boolean = false;
  supergigantevermelhaTempoFusao: boolean = false;
  supergigantevermelhaCicloVida: boolean = false;

  nebulosaplanetariaoQueE: boolean = false;
  nebulosaplanetariaComposicao: boolean = false;
  nebulosaplanetariaTempoFusao: boolean = false;
  nebulosaplanetariaCicloVida: boolean = false;

  sequenciaprincipaloQueE: boolean = false;
  sequenciaprincipalComposicao: boolean = false;
  sequenciaprincipalTempoFusao: boolean = false;
  sequenciaprincipalCicloVida: boolean = false;

  estreladewolfoQueE: boolean = false;
  estreladewolfComposicao: boolean = false;
  estreladewolfTempoFusao: boolean = false;
  estreladewolfCicloVida: boolean = false;

  supernovaoQueE: boolean = false;
  supernovaComposicao: boolean = false;
  supernovaTempoFusao: boolean = false;
  supernovaCicloVida: boolean = false;

  giganteazuloQueE: boolean = false;
  giganteazulComposicao: boolean = false;
  giganteazulTempoFusao: boolean = false;
  giganteazulCicloVida: boolean = false;

  estreladeneutronsoudequarksoQueE: boolean = false;
  estreladeneutronsoudequarksComposicao: boolean = false;
  estreladeneutronsoudequarksTempoFusao: boolean = false;
  estreladeneutronsoudequarksCicloVida: boolean = false;

  brancoazuladaoQueE: boolean = false;
  brancoazuladaComposicao: boolean = false;
  brancoazuladaTempoFusao: boolean = false;
  brancoazuladaCicloVida: boolean = false;

  buraconegrooQueE: boolean = false;
  buraconegroComposicao: boolean = false;
  buraconegroTempoFusao: boolean = false;
  buraconegroCicloVida: boolean = false;

  oQueE(arg0: string) {
    if (arg0 == 'nebulosa') {
      this.nebulosaoQueE = !this.nebulosaoQueE;
    } else if (arg0 == 'protoestrela') {
      this.protoEstrelaoQueE = !this.protoEstrelaoQueE;
    } else if (arg0 == 'Anã vermelha') {
      this.anavermelhaoQueE = !this.anavermelhaoQueE;
    } else if (arg0 == 'Anã branca') {
      this.anabrancaoQueE = !this.anabrancaoQueE;
    } else if (arg0 == 'Gigante vermelha') {
      this.gigantevermelhaoQueE = !this.gigantevermelhaoQueE;
    } else if (arg0 == 'supergigante vermelha') {
      this.supergigantevermelhaoQueE = !this.supergigantevermelhaoQueE;
    } else if (arg0 == 'Nebulosa planetária') {
      this.nebulosaplanetariaoQueE = !this.nebulosaplanetariaoQueE;
    } else if (arg0 == 'Sequencia principal') {
      this.sequenciaprincipaloQueE = !this.sequenciaprincipaloQueE;
    } else if (arg0 == 'estrela de wolf') {
      this.estreladewolfoQueE = !this.estreladewolfoQueE;
    } else if (arg0 == 'supernova') {
      this.supernovaoQueE = !this.supernovaoQueE;
    } else if (arg0 == 'gigante azul') {
      this.giganteazuloQueE = !this.giganteazuloQueE;
    } else if (arg0 == 'estrela de neutrons ou de quarks') {
      this.estreladeneutronsoudequarksoQueE =
        !this.estreladeneutronsoudequarksoQueE;
    } else if (arg0 == 'branco azulada') {
      this.brancoazuladaoQueE = !this.brancoazuladaoQueE;
    } else if (arg0 == 'buraco negro') {
      this.buraconegrooQueE = !this.buraconegrooQueE;
    }
  }
  tempoFusao(arg0: string) {
    if (arg0 == 'nebulosa') {
      this.nebulosaTempoFusao = !this.nebulosaTempoFusao;
    } else if (arg0 == 'protoestrela') {
      this.protoEstrelaTempoFusao = !this.protoEstrelaTempoFusao;
    } else if (arg0 == 'Anã vermelha') {
      this.anavermelhaTempoFusao = !this.anavermelhaTempoFusao;
    } else if (arg0 == 'Anã branca') {
      this.anabrancaTempoFusao = !this.anabrancaTempoFusao;
    } else if (arg0 == 'Gigante vermelha') {
      this.gigantevermelhaTempoFusao = !this.gigantevermelhaTempoFusao;
    } else if (arg0 == 'Supergigante vermelha') {
      this.supergigantevermelhaTempoFusao =
        !this.supergigantevermelhaTempoFusao;
    } else if (arg0 == 'Nebulosa planetária') {
      this.nebulosaplanetariaTempoFusao = !this.nebulosaplanetariaTempoFusao;
    } else if (arg0 == 'Sequencia principal') {
      this.sequenciaprincipalTempoFusao = !this.sequenciaprincipalTempoFusao;
    } else if (arg0 == 'estrela de wolf') {
      this.estreladewolfTempoFusao = !this.estreladewolfTempoFusao;
    } else if (arg0 == 'supernova') {
      this.supernovaTempoFusao = !this.supernovaTempoFusao;
    } else if (arg0 == 'gigante azul') {
      this.giganteazulTempoFusao = !this.giganteazulTempoFusao;
    } else if (arg0 == 'estrela de neutrons ou de quarks') {
      this.estreladeneutronsoudequarksTempoFusao =
        !this.estreladeneutronsoudequarksTempoFusao;
    } else if (arg0 == 'branco azulada') {
      this.brancoazuladaTempoFusao = !this.brancoazuladaTempoFusao;
    } else if (arg0 == 'buraco negro') {
      this.buraconegroTempoFusao = !this.buraconegroTempoFusao;
    }
  }
  composicao(arg0: string) {
    if (arg0 == 'nebulosa') {
      this.nebulosaComposicao = !this.nebulosaComposicao;
    } else if (arg0 == 'protoestrela') {
      this.protoEstrelaComposicao = !this.protoEstrelaComposicao;
    } else if (arg0 == 'Anã vermelha') {
      this.anavermelhaComposicao = !this.anavermelhaComposicao;
    } else if (arg0 == 'Anã branca') {
      this.anabrancaComposicao = !this.anabrancaComposicao;
    } else if (arg0 == 'Gigante vermelha') {
      this.gigantevermelhaComposicao = !this.gigantevermelhaComposicao;
    } else if (arg0 == 'Supergigante vermelha') {
      this.supergigantevermelhaComposicao =
        !this.supergigantevermelhaComposicao;
    } else if (arg0 == 'Nebulosa planetária') {
      this.nebulosaplanetariaComposicao = !this.nebulosaplanetariaComposicao;
    } else if (arg0 == 'Sequencia principal') {
      this.sequenciaprincipalComposicao = !this.sequenciaprincipalComposicao;
    } else if (arg0 == 'estrela de wolf') {
      this.estreladewolfComposicao = !this.estreladewolfComposicao;
    } else if (arg0 == 'supernova') {
      this.supernovaComposicao = !this.supernovaComposicao;
    } else if (arg0 == 'gigante azul') {
      this.giganteazulComposicao = !this.giganteazulComposicao;
    } else if (arg0 == 'estrela de neutrons ou de quarks') {
      this.estreladeneutronsoudequarksComposicao =
        !this.estreladeneutronsoudequarksComposicao;
    } else if (arg0 == 'branco azulada') {
      this.brancoazuladaComposicao = !this.brancoazuladaComposicao;
    } else if (arg0 == 'buraco negro') {
      this.buraconegroComposicao = !this.buraconegroComposicao;
    }
  }
  cicloVida(arg0: string) {
    if (arg0 == 'nebulosa') {
      this.nebulosaCicloVida = !this.nebulosaCicloVida;
    } else if (arg0 == 'protoestrela') {
      this.protoEstrelaCicloVida = !this.protoEstrelaCicloVida;
    } else if (arg0 == 'Anã vermelha') {
      this.anavermelhaCicloVida = !this.anavermelhaCicloVida;
    } else if (arg0 == 'Anã branca') {
      this.anabrancaCicloVida = !this.anabrancaCicloVida;
    } else if (arg0 == 'Gigante vermelha') {
      this.gigantevermelhaCicloVida = !this.gigantevermelhaCicloVida;
    } else if (arg0 == 'supergigante vermelha') {
      this.supergigantevermelhaCicloVida = !this.supergigantevermelhaCicloVida;
    } else if (arg0 == 'Nebulosa planetária') {
      this.nebulosaplanetariaCicloVida = !this.nebulosaplanetariaCicloVida;
    } else if (arg0 == 'Sequencia principal') {
      this.sequenciaprincipalCicloVida = !this.sequenciaprincipalCicloVida;
    } else if (arg0 == 'estrela de wolf') {
      this.estreladewolfCicloVida = !this.estreladewolfCicloVida;
    } else if (arg0 == 'supernova') {
      this.supernovaCicloVida = !this.supernovaCicloVida;
    } else if (arg0 == 'gigante azul') {
      this.giganteazulCicloVida = !this.giganteazulCicloVida;
    } else if (arg0 == 'estrela de neutrons ou de quarks') {
      this.estreladeneutronsoudequarksCicloVida =
        !this.estreladeneutronsoudequarksCicloVida;
    } else if (arg0 == 'branco azulada') {
      this.brancoazuladaCicloVida = !this.brancoazuladaCicloVida;
    } else if (arg0 == 'buraco negro') {
      this.buraconegroCicloVida = !this.buraconegroCicloVida;
    }
  }

  nebulosa = {
    name: 'Nebulosa',
    ciclodevida: 'bbbb',
    composicao: 'ccccc',
    processofusao: 'dddddddd',
    oque: 'AAAAAAAAA',
    img: '../assets/nebulosa.svg',
  };
  protoestrela = {
    name: 'Protoestrela',
    ciclodevida: 'aaaa',
    composicao: 'aa',
    processofusao: 'aa',
    oque: 'aaa',
    img: '../assets/protoestrela.svg',
  };
  anavermelha = {
    name: 'Anã vermelha',
    ciclodevida: '',
    composicao: '',
    processofusao: '',
    oque: '',
    img: '../assets/anavermelha.svg',
  };
  anabranca = {
    name: 'Anã branca',
    ciclodevida: 'aaaa',
    composicao: 'aa',
    processofusao: 'aaaaa',
    oque: 'aaaaa',
    img: '../assets/anabranca.svg',
  };
  gigantevermelha = {
    name: 'Gigante vermelha',
    ciclodevida: '',
    composicao: '',
    processofusao: '',
    oque: '',
    img: '../assets/gigantevermelha.svg',
  };
  supergigantevermelha = {
    name: 'Supergigante vermelha',
    ciclodevida: '',
    composicao: '',
    processofusao: '',
    oque: '',
    img: '../assets/supergigantevermelha.svg',
  };
  nebulosaplanetaria = {
    name: 'Nebulosa planetária',
    ciclodevida: '',
    composicao: '',
    processofusao: '',
    oque: '',
    img: '../assets/nebulosaplanetaria.svg',
  };
  sequenciaprincipal= {
    name: 'Sequencia principal',
    ciclodevida: '',
    composicao: '',
    processofusao: '',
    oque: '',
    img: '',
  };
  estreladewolf = {
    name: 'Estrela de wolf',
    ciclodevida: '',
    composicao: '',
    processofusao: '',
    oque: '',
    img: '../assets/estreladewolf.svg',
  };
  supernova = {
    name: 'Supenova',
    ciclodevida: '',
    composicao: '',
    processofusao: '',
    oque: '',
    img: '../assets/supernova.svg',
  };
  giganteazul = {
    name: 'Gigante azul',
    ciclodevida: '',
    composicao: '',
    processofusao: '',
    oque: '',
    img: '../assets/giganteazul.svg',
  };
  estreladeneutronsoudequarks = {
    name: 'Estrela de nêutrons ou de quarks',
    ciclodevida: '',
    composicao: '',
    processofusao: '',
    oque: '',
    img: '',
  };
  brancoazulada = {
    name: 'Branco azulada',
    ciclodevida: '',
    composicao: '',
    processofusao: '',
    oque: '',
    img: '../assets/brancoazulada.svg',
  };
  buraconegro = {
    name: 'Buraco negro',
    ciclodevida: '',
    composicao: '',
    processofusao: '',
    oque: '',
    img: '../assets/buraconegro.svg',
  };

  ngOnInit(): void {
    this.form = new FormGroup({
      massa: new FormControl(),
    });
  }

  getMassa(form: FormGroup) {
    let M = form.value.massa;
    this.exibir = 'primeiro';
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
