import { Component, OnInit } from '@angular/core';


//Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cadastro-pessoa-lista',
  templateUrl: './cadastro-pessoa-lista.component.html',
  styleUrls: ['./cadastro-pessoa-lista.component.css']
})
export class CadastroPessoaListaComponent implements OnInit {

  pessoas: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.pessoas = db.list('pessoas');
   }

  ngOnInit() { }

}
