import { Component, OnInit } from '@angular/core';
import { InfoLugarService } from '../../services/info-lugares.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public lugares: InfoLugarService) { }

  ngOnInit(): void {
  }

}
