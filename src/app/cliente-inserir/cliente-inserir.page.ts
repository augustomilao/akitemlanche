import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api2.service';
import { Router } from '@angular/router';
import { Cliente} from '../models/cliente';


@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.page.html',
  styleUrls: ['./cliente-inserir.page.scss'],
})
export class ClienteInserirPage implements OnInit {

       data: Cliente
     
      constructor(
        public apiService: ApiService,
        public router: Router
      ) {
        this.data = new Cliente();
      }
     
      ngOnInit() {
      }
     
      submitForm() {
        this.apiService.createItem(this.data).subscribe((response) => {
          this.router.navigate(['cliente-list']);
        });
     
      }
     
    }
  