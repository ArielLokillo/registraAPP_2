import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  userAlumno!: string;
  passAlumno!: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (!this.userAlumno || !this.passAlumno){
      //Validar que se ingresen tanto el correo como la contraseña
      console.log('Por favor, Complete todos los campos');
      return;
    }
    if (!this.validarUser(this.userAlumno)){
      //validar el formato del correo
      console.log('El correo ingresado no es válido');
      return;
    }

    //Aqui se puede enviar el correo y la contraseña al servidor para su validación

  }
  
  validarUser(user: string){
    //Validación del formato del correo
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(user);
  }

  register(){
    this.router.navigate(['register'])
  }


}
