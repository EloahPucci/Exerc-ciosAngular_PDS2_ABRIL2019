import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titEx1 = 'Exemplo 1:';
  titEx2 = "Exemplo 2:";
  titEx3 = "Exemplo 3:";
  titEx4 = "Exemplo 4:";
  titEx5 = "Exemplo 5:";
  titEx6 = "Exemplo 6:";
  txt1 = 'MÉTODO 01: Usando FOR:'
  txt2 = 'MÉTODO 02: Usando FOR EACH:'
  txt3 = 'MÉTODO 03: Usando FILTER:'
  txt4 = 'MÉTODO 04: Usando FILTER com ARROW FUNCTION:'
  nomes: string[] = ['João', 'Maria', 'José', 'Pedro', 'Felipe', 'Carlos', 'Karina'];
  nomes2: string[] = [];
  nomesFiltro1: string[];
  nomesFiltro2: string[];
  nomesFiltro3: string[];
  nomesFiltro4: string[];

  buscar(valor: string) {
    alert(valor + " =)");
  }

  //método 1
  buscar1(valor: string) {
    this.nomesFiltro1 = [];

    for (var i = 0; i < this.nomes.length; i++) {
      if (this.nomes[i].toLowerCase().includes(valor.toLowerCase())) {
        this.nomesFiltro1.push(this.nomes[i]);
      }
    }
  }

  //método2
  buscar2(valor: string) {

    let temp = [];
    this.nomes.forEach(buscarItem);
    function buscarItem(nome) {
      if (nome.toLowerCase().includes(valor.toLowerCase())) {
        temp.push(nome);
      }
    }
    this.nomesFiltro2 = temp;
  }

  //método3
  buscar3(valor: string) {
    this.nomesFiltro3 = this.nomes.filter(function (nome) {
      return nome.toLowerCase().includes(valor.toLowerCase());
    });
  }

  //método4
  buscar4(valor: string) {
    this.nomesFiltro4 = this.nomes.filter(
      (nome) => nome.toLowerCase().includes(valor.toLowerCase()));
  }
}
