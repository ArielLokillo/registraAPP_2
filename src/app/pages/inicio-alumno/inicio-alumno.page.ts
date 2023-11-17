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
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['inicio']);
  }

  changeLangs(event:any) {
    this.transService.use(event.detail.value);
  }
}
