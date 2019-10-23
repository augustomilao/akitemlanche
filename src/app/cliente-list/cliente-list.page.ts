import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api2.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.page.html',
  styleUrls: ['./cliente-list.page.scss'],
})
export class ClienteListPage implements OnInit {

  clientesData: any;
 
  constructor(
    public apiService: ApiService
  ) {
    this.clientesData = [];
  }
 
  ngOnInit() {
    this.getAllClientes();
  }
 
  getAllClientes() {
   //Lista todos os Clientes
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.clientesData = response;
    })
  }
 
 
  delete(item) {
    //Deleta um cliente
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Atualiza a lista
      this.getAllClientes();
    });
  }
 
}