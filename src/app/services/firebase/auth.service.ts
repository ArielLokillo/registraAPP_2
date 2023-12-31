import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  async login(email: string, pass: string) {
    try {
      const user = await this.auth.signInWithEmailAndPassword(email,pass);
      if(user) {
        this.router.navigate(['home']);
        // bienvenidossssss
      }
      console.log(user);
    } catch (error) {
      console.error('Error en login: ', error);
    }
  }

  async register(email: string, pass: string) {
    try {
      const user = await this.auth.createUserWithEmailAndPassword(email,pass);
      this.auth.signInWithEmailAndPassword(email,pass);
      console.log(user);
    } catch (error) {
      console.error('Error en register: ', error);
    }
  }

  async recuperarContrasena(email: string, pass: string){
    try {
      const user = await this.auth.sendPasswordResetEmail;
      this.auth.confirmPasswordReset(email,pass)
      console.log(user);
    } catch (error) {
      console.error('Error en recuperar contrasena: ', error);
    }
  }

  async logout() {
    try {
      await this.auth.signOut();
      //this.router.navigate(['inicio']);
    } catch (error) {
      console.error('Error en logout: ', error)
    }
  }

  checkAuth() {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        resolve(user);
      }, (error) => {
        reject(error);
      });
    });
  }


  async loginAlumno(email: string, pass: string) {
    try {
      const user = await this.auth.signInWithEmailAndPassword(email,pass);
      if(user) {
        this.router.navigate(['inicio-alumno']);
        // bienvenidossssss
      }
      console.log(user);
    } catch (error) {
      console.error('Error en login: ', error);
    }
  }

  async logoutAlumno() {
    try {
      await this.auth.signOut();
      //this.router.navigate(['inicio']);
    } catch (error) {
      console.error('Error en logout: ', error)
    }
  }

  async logoutAll(){
    try {
      await this.auth.signOut();
      //this.router.navigate(['inicio']);
    } catch (error) {
      console.error('Error en logout: ', error)
    }
  }
}
