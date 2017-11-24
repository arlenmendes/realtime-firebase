import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

//componentes do Modulo Pessoas
import {CadastroPessoaComponent} from "./cadastro-pessoa.component";
import { CadastroPessoaFormComponent } from './cadastro-pessoa-form/cadastro-pessoa-form.component';
import { CadastroPessoaListaComponent } from './cadastro-pessoa-lista/cadastro-pessoa-lista.component';

//Firebase
import {AngularFireDatabase} from "angularfire2/database";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [CadastroPessoaFormComponent, CadastroPessoaListaComponent, CadastroPessoaComponent],
  exports: [CadastroPessoaComponent],
  providers: [AngularFireDatabase]
})
export class CadastroPessoaModule { }
