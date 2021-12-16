import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transferencia, TransferService } from 'src/app/servicos/transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  transfer: Transferencia = {
    id_transfer: '',
    nome_cliente: '',
    conta_cliente: '',
    valor: ''
  }

  constructor(private TransferService: TransferService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = <any>this.activatedRoute.snapshot.params['id']
    this.TransferService.getUmaTransfer(id).subscribe({
      next: resultado => {
        console.log(resultado)
        this.transfer = resultado
      },
      error: erro => console.error(erro),
      complete: () => console.info('Complete')
    })
  }

  modificar() {
    this.TransferService.editTransfer(this.transfer.id_transfer, this.transfer).subscribe({
      next: resultado =>console.log(resultado),
      error: erro => console.error(erro),
      complete: () => console.info('Complete')
    })
    this.router.navigate(['/sistema'])
  }

}
