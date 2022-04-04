import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
})
export class AgregarEmpleadoComponent implements OnInit {

  miFormulario:FormGroup;

  constructor( private fb: FormBuilder,
               private crud: CrudService,
               private router: Router ) {

    this.miFormulario = this.fb.group({
      marca:['',Validators.required],
      modelo:['',Validators.required],
      precio:['',[Validators.required,Validators.min(1)]],

    })
   }

  ngOnInit(): void {

  }
  enviarDatos() {
    this.crud.AgregarDispositivo(this.miFormulario.value).subscribe();
    this.miFormulario.reset();
    this.router.navigateByUrl('/listar');
  }
}
