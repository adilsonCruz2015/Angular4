import { FRASES } from './frases-mock';
import { Frase } from './../shared/frase.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta:  string = ''

  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas :  number = 3

  constructor() { 
    this.atualizaRodada();    
  }

  ngOnInit() { }

    public atualizarResposta(resposta: Event): void {
       this.resposta = (<HTMLInputElement>resposta.target).value
       //console.log(this.resposta);
    }

    public verificarResposta(): void{
        if(this.rodadaFrase.frasePtBr.trim().toUpperCase() == this.resposta.trim().toUpperCase()){
          
            this.rodada++          
            this.progresso = this.progresso + (100 / this.frases.length)
            this.atualizaRodada()
        }
        else{
             this.tentativas--
             if(this.tentativas === -1){
               alert('Você perdeu todas as tentativas')
             }
        }   
    }

    public atualizaRodada(): void{
      this.rodadaFrase = this.frases[this.rodada]
      this.resposta = ''
    }
}
