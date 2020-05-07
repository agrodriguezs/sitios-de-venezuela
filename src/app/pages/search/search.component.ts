import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoLugarService } from '../../services/info-lugares.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  			  public lugares: InfoLugarService ) { }

  ngOnInit(): void {

  	this.route.params
  		.subscribe(	params => {

  			this.lugares.buscarLugar( params[ 'termino' ]);


  		});

  }

}
