import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallecard',
  templateUrl: './detallecard.page.html',
  styleUrls: ['./detallecard.page.scss'],
})
export class DetallecardPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.httpClient.get<any>("https://randomuser.me/api/results").subscribe(resultado => {
    console.log(resultado)
    })
  }

}
