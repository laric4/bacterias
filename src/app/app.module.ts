import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NebulosaComponent } from './stars/nebulosa/nebulosa.component';
import { ProtoestrelaComponent } from './stars/protoestrela/protoestrela.component';
import { GiganteVermelhaComponent } from './stars/gigante-vermelha/gigante-vermelha.component';
import { AnaVermelhaComponent } from './stars/ana-vermelha/ana-vermelha.component';
import { AnaBrancaComponent } from './stars/ana-branca/ana-branca.component';
import { EstrelaAmarelaComponent } from './stars/estrela-amarela/estrela-amarela.component';
import { SuperGiganteVermelhaComponent } from './stars/super-gigante-vermelha/super-gigante-vermelha.component';
import { NebulosaPlanetariaComponent } from './stars/nebulosa-planetaria/nebulosa-planetaria.component';
import { BrancoAzuladaComponent } from './stars/branco-azulada/branco-azulada.component';
import { EstrelaDeWolfComponent } from './stars/estrela-de-wolf/estrela-de-wolf.component';
import { SupernovaComponent } from './stars/supernova/supernova.component';
import { GiganteAzulComponent } from './stars/gigante-azul/gigante-azul.component';
import { BuracoNegroComponent } from './stars/buraco-negro/buraco-negro.component';
import { EstrelaDeNeutronsOuQuarksComponent } from './stars/estela-de-neutrons-ou-quarks/estrela-de-neutrons-ou-quarks.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GenericContentComponent } from './generic-content/generic-content.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        GenericContentComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NebulosaComponent,
        GiganteVermelhaComponent,
        AnaVermelhaComponent,
        AnaBrancaComponent,
        EstrelaAmarelaComponent,
        SuperGiganteVermelhaComponent,
        NebulosaPlanetariaComponent,
        BrancoAzuladaComponent,
        EstrelaDeWolfComponent,
        ProtoestrelaComponent,
        SupernovaComponent,
        EstrelaDeNeutronsOuQuarksComponent,
        GiganteAzulComponent,
        BuracoNegroComponent
    ]
})
export class AppModule { }
