import { Cliente } from './../models/cliente';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api2.service';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.page.html',
  styleUrls: ['./cliente-editar.page.scss'],
})
export class ClienteEditarPage implements OnInit {

  
  id: number;
  data: Cliente;
 
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Cliente();
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
      this.router.navigate(['cliente-list']);
    })
  }
 

}


