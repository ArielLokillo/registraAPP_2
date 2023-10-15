import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

  login_docente() {
    this.router.navigate(['login-docente'])
  }

  login_alumno() {
    this.router.navigate(['login'])
  }

  navigateToTerms() {
    this.navCtrl.navigateForward('terminos-y-condiciones');
  }
}
