import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-terminos-y-condiciones',
  templateUrl: './terminos-y-condiciones.page.html',
  styleUrls: ['./terminos-y-condiciones.page.scss'],
})
export class TerminosYCondicionesPage implements OnInit {

  langs: string[] = [];
  idioma!: string;

  aceptoTerminos: boolean = false;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private transService: TranslateService
    ) { 
      this.langs = this.transService.getLangs();
    }

  ngOnInit() {
  }

  navigateToTerms() {
    this.navCtrl.navigateForward('terminos-y-condiciones');
  }

  cerrar() { 
    if (this.aceptoTerminos ) {
      // Realiza la acción de cierre, como navegar a la página principal o cerrar el modal.
    }
  }

  changeLangs(event:any) {
    const selectedLang = event.detail.value;
    this.transService.use(selectedLang);
    this.idioma = selectedLang;
  }

}
