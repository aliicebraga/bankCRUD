import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { SistemaComponent } from './componentes/sistema/sistema.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'sistema', component: SistemaComponent },
  { path: 'add', component: CadastroComponent },
  {
    path: 'edit/:id',
    component: ModificarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
