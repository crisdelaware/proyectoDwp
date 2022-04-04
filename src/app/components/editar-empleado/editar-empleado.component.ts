import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html'
})
export class EditarEmpleadoComponent implements OnInit {

  miFormulario:FormGroup;
  ID:any;
  constructor( private router: Router,
               private activeRoute: ActivatedRoute,
               private crud: CrudService,
               private fb: FormBuilder ) {
                 this.ID = this.activeRoute.snapshot.paramMap.get('id');
                 console.log(this.ID);
                 this.crud.ObtenerDispositivo(this.ID).subscribe(
                   resp => { console.log(resp);
                    this.miFormulario.setValue({
                      marca:resp[0]['marca'],
                      modelo:resp[0]['modelo'],
                      precio:resp[0]['precio']
                    })
                  }
                );
                  this.miFormulario = this.fb.group(
                    {
                      marca:[''],
                      modelo:[''],
                      precio:['']
                    }
                  );
              }

  ngOnInit(): void {
  }

  enviarDatos():any {
    this.crud.EditarDispositivo(this.ID,this.miFormulario.value).subscribe(() => {
      this.router.navigateByUrl('/listar')
    });
  }
}
