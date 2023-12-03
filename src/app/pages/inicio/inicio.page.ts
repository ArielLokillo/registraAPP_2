import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  langs: string[] = [];
  idioma!: string;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private transService: TranslateService
  ) { 
    this.langs = this.transService.getLangs();
  }

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

  changeLangs(event: any) {
    const selectedLang = event.detail.value;
    this.transService.use(selectedLang);
    this.idioma = selectedLang;
  }
}
