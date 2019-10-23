import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Profissional } from '../models/profissional';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-professional-editar',
  templateUrl: './professional-editar.page.html',
  styleUrls: ['./professional-editar.page.scss'],
})
export class ProfessionalEditarPage implements OnInit {

  
  id: number;
  data: Profissional;
 
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Profissional();
  }
 
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }
 
  update() {
    
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      this.router.navigate(['professional-list']);
    })
  }
 

}


