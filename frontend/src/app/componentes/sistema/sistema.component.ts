import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService, Transferencia } from 'src/app/servicos/transfer.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {
  ListarTransfer: Transferencia[]
  constructor(private TransferService: TransferService, private router: Router) {
    [this.ListarTransfer = []]
  }

  ngOnInit(): void {
    this.listarTransfer()
  }

  listarTransfer() {
    this.TransferService.getTransfer().subscribe({
      next: resultado => {
        console.log(resultado)
        this.ListarTransfer = <any>resultado
      },
      error: erro => console.error(erro),
      complete: () => console.info('complete')
    })
  }

  editar(id: any) {
    this.router.navigate(['/edit/' + id])
  }

  deletar(id: any) {
    this.TransferService.deleteTransfer(id).subscribe({
      next: resultado => {
        console.log(resultado)
        this.listarTransfer()
      },
      error: erro => console.error(erro),
      complete: () => console.info('Complete')
    })
  }
}
