import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html'
})
export class ListarEmpleadoComponent implements OnInit {

  dispositivos:any;

  constructor( private crud: CrudService ) { }

  ngOnInit(): void {
    this.crud.ListarDispositivo()
      .subscribe(resp => {
        this.dispositivos = resp;
      });
  }

  borrar(id:any) {
    this.crud.BorrarDispositivo(id).subscribe((resp) => {
      location.reload();
    })
  }

}
