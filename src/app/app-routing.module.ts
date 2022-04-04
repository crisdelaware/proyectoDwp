import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';

const routes: Routes = [
  { path: 'listar', component: ListarEmpleadoComponent },
  { path: 'agregar', component: AgregarEmpleadoComponent },
  { path: 'editar/:id', component: EditarEmpleadoComponent },
  { path: '**', redirectTo: 'listar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
