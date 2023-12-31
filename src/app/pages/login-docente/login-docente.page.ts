import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UsuariosrandomService } from 'src/app/services/api/usuariosrandom.service';
import { AuthService } from 'src/app/services/firebase/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-docente',
  templateUrl: './login-docente.page.html',
  styleUrls: ['./login-docente.page.scss'],
})
export class LoginDocentePage implements OnInit {

  //DECLARACION
  loginForm: FormGroup //PARA VALIDAR EL FORMULARIO
  user: any //PARA CAPTURAR TODA LA INFO DEL USUARIORANDOM
  pass: any //PARA CAPTURAR LA INFO DEL PASS DEL USUARIORANDOM
  emailValue?: string //PARA CAPTURAR EL EMAIL DEL USUARIORANDOM
  passValue?: string //PARA CAPTURAR LA PASS DEL USUARIORANDOM
  
  langs: string[] = [];
  idioma!: string;

  constructor(
    private router: Router,
    private usuariosrandom: UsuariosrandomService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private transService: TranslateService
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
    }),

    this.langs = this.transService.getLangs();
  }
  
  ngOnInit() {
    this.authService.checkAuth()
    .then((user) => {
      if(user){
        this.router.navigate(['home']);
      }
    })
    .catch((error) => {
      console.log('Error en autenticacion: ', error);
    });
  }

  login() {
    if(this.emailValue && this.passValue) {
      var log = this.authService.login(this.emailValue,this.passValue);
      log.then((res => {
        this.mensajeToast("Bienvenido Usuario!")
        this.router.navigate(['home'])
      }))
      log.catch((error)=> {
        this.mensajeToast("Usuario no valido")
      })
      //this.mensajeToast("Bienvenido Usuario!")
      //this.router.navigate(['inicio-alumno'])
    }
  }

  register(){
    //this.router.navigate(['register'])
    if(this.emailValue && this.passValue) {
      this.authService.register(this.emailValue,this.passValue);
      this.mensajeToast("Usuario registrado correctamente!")
      //this.router.navigate(['inicio-alumno'])
    }
  }

  mensajeToast(mensaje: String){
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: mensaje
    })
  }

  mensaje(){
    Swal.fire({
      icon: 'success',
      title: 'Usuario registrado',
      text: 'Correctamente',
      heightAuto: false,
    })
  }

  changeLangs(event: any) {
    const selectedLang = event.detail.value;
    this.transService.use(selectedLang);
    this.idioma = selectedLang;
  }
}