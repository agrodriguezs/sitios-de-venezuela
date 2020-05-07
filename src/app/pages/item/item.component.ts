import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoLugares } from '../../interfaces/info-lugares.interface';
import { InfoLugarService } from '../../services/info-lugares.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  lugar: InfoLugares;
  id: string;

  constructor(private route: ActivatedRoute, public lugarService: InfoLugarService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe( parametros => {
      this.lugarService.getLugar(parametros[ "id" ])
      .subscribe( (  lugar: InfoLugares) => {
        this.lugar = lugar;
        this.id = parametros[ "id" ];
      });
    });
  }

}
