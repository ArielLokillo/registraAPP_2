import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-terminos-y-condiciones',
  templateUrl: './terminos-y-condiciones.page.html',
  styleUrls: ['./terminos-y-condiciones.page.scss'],
})
export class TerminosYCondicionesPage implements OnInit {

  aceptoTerminos: boolean = false;
  constructor(private navCtrl: NavController) { }

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
}
