import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from "../services/autenticacion.service";

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder, private ruta:Router, private autenticacionService:AutenticacionService) {
    this.form=this.formBuilder.group(
      {
        username:['',[Validators.required, Validators.minLength(3)]],
        password:['',[Validators.required, Validators.minLength(8)]],     
                         
      }
    )
   }
  
  ngOnInit(): void {
  }

  get Username()
  {
    return this.form.get('username');
  }

  get Password()
  {
    return this.form.get('password');
  }

  onEnviar(event:Event)
  {
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
     console.log("DATA:" + JSON.stringify(data));
     this.ruta.navigate(['/landing'])
    })
  }

}
