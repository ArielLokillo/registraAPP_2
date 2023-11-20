import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/firebase/auth.service';

@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.page.html',
  styleUrls: ['./inicio-alumno.page.scss'],
})
export class InicioAlumnoPage implements OnInit {

  langs: string[] = [];
  idioma!: string;

  constructor(
    private router: Router,
    private auth: AuthService,
    private transService: TranslateService
  ) { 
    this.langs = this.transService.getLangs();
  }

  ngOnInit() {
    this.auth.logoutAll();
  }

  logoutAlumno() {
    this.auth.logoutAlumno();
    this.router.navigate(['inicio']);
  }

  changeLangs(event: any) {
    const selectedLang = event.detail.value;
    this.transService.use(selectedLang);
    this.idioma = selectedLang;
  }
  
}
