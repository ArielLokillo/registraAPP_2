import { Component } from '@angular/core';
import { AuthService } from '../services/firebase/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
    const selectedLang = event.detail.value;
    this.transService.use(selectedLang);
    this.idioma = selectedLang;
  }
  
}
