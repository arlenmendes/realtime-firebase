import { FirebaseConfig } from './../environments/firebase.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2/index';

import { AppComponent } from './app.component';
import { CadastroPessoaModule } from './cadastro-pessoa/cadastro-pessoa.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CadastroPessoaModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
