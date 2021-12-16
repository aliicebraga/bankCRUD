import { TransferService } from './../../servicos/transfer.service';
import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/servicos/transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  transfer:Transferencia = {
    id_transfer: '',
    nome_cliente: '',
    conta_cliente: '',
    valor:''
  }

  constructor(private TransferService:TransferService, private router:Router) { }

  ngOnInit(): void {
  }

  adicionar(){
    delete this.transfer.id_transfer

    this.TransferService.addTransfer(this.transfer).subscribe({
      next: resultado=>console.log(resultado),
      error: erro => console.error(erro),
      complete: ()=>console.info('Complete')

    })
    this.router.navigate(['/sistema'])
  }

}
