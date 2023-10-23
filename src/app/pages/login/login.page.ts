import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/api/usuarios.service';
import { UsuariosrandomService } from 'src/app/services/api/usuariosrandom.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //DECLARACION
  loginForm: FormGroup //PARA VALIDAR EL FORMULARIO
  user: any //PARA CAPTURAR TODA LA INFO DEL USUARIORANDOM
  emailValue?: string //PARA CAPTURAR EL EMAIL DEL USUARIORANDOM
  passValue?: string //PARA CAPTURAR LA PASS DEL USUARIORANDOM
  
  constructor(
    private router: Router,
    private usuariosrandom: UsuariosrandomService,
    private usuarios: UsuariosService,
    private formBuilder: FormBuilder
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
    })
  }
  
  ngOnInit() {
    
  }

  login() {
    this.router.navigate(['inicio-alumno'])
  }

  register(){
    this.router.navigate(['register'])
  }

}
