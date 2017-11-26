import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-cadastro-pessoa-lista',
  templateUrl: './cadastro-pessoa-lista.component.html',
  styleUrls: ['./cadastro-pessoa-lista.component.css']
})
export class CadastroPessoaListaComponent implements OnInit {

  pessoas: AngularFireList<any[]>;
  constructor(db: AngularFireDatabase) {
    this.pessoas = db.list('pessoas').valueChanges();
    console.log(this.pessoas);
  }

  ngOnInit() {
  }
}
