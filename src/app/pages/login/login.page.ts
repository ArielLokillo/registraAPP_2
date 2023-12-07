import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UsuariosService } from 'src/app/services/api/usuarios.service';
import { UsuariosrandomService } from 'src/app/services/api/usuariosrandom.service';
import { AuthService } from 'src/app/services/firebase/auth.service';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';
import Swal from 'sweetalert2';
import { IUsuario } from 'src/app/interfaces/iusuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //DECLARACION
  loginForm: FormGroup //PARA VALIDAR EL FORMULARIO
  user: any //PARA CAPTURAR TODA LA INFO DEL USUARIORANDOM
  pass: any //PARA CAPTURAR LA INFO DEL PASS DEL USUARIORANDOM
  emailValue?: string //PARA CAPTURAR EL EMAIL DEL USUARIORANDOM
  passValue?: string //PARA CAPTURAR LA PASS DEL USUARIORANDOM
  
  langs: string[] = [];
  idioma!: string;

  usuario: any;

  constructor(
    private router: Router,
    private usuariosrandom: UsuariosrandomService,
    private usuarios: UsuariosService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private transService: TranslateService,
    private firestore: FirestoreService
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
        this.router.navigate(['inicio-alumno']);
      }
    })
    .catch((error) => {
      console.log('Error en autenticacion: ', error);
    });
  }

  loginAlumno() {
    if(this.emailValue && this.passValue) {
      var log = this.authService.loginAlumno(this.emailValue,this.passValue);
      log.then((res => {
        this.mensajeToast("Bienvenido Usuario!")
        this.router.navigate(['inicio-alumno'])
      }))
      log.catch((error)=> {
        this.mensajeToast("Usuario no valido")
      })
      //this.mensajeToast("Bienvenido Usuario!")
      //this.router.navigate(['inicio-alumno'])
    }
  }

  register() {
    if (this.emailValue && this.passValue) {
      // Crea un objeto de usuario con la información del formulario
      const userData: IUsuario = {
        usuario: this.emailValue, // Asigna un valor adecuado para la propiedad usuario
        password: this.passValue,
        // otras propiedades según la interfaz...
      };
  
      // Llama al servicio de Firestore para agregar el usuario
      this.firestore.createDocument('usuarios', userData)
        .then(() => {
          this.mensajeToast('Usuario registrado correctamente!');
          // Puedes redirigir al usuario a donde quieras después del registro
        })
        .catch((error) => {
          console.error('Error al registrar usuario en Firestore:', error);
          this.mensajeToast('Error al registrar usuario. Por favor, inténtalo de nuevo.');
        });
    }
  }

  recuperarContrasena(){
    if(this.emailValue && this.passValue) {
      this.authService.recuperarContrasena(this.emailValue,this.passValue);
      this.mensajeToast("Contraseña cambiada con exito!")
    }
  }

  logoutAlumno() {
    this.authService.logoutAlumno();
    this.router.navigate(['inicio']);
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
      title: '',
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
