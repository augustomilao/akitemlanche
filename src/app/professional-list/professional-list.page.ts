import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.page.html',
  styleUrls: ['./professional-list.page.scss'],
})
export class ProfessionalListPage implements OnInit {

 
  profissionaisData: any;
 
  constructor(
    public apiService: ApiService
  ) {
    this.profissionaisData = [];
  }
 
  ngOnInit() {
    this.getAllProfissionais();
  }
 
  getAllProfissionais() {
   //Lista todos os profissionais
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.profissionaisData = response;
    })
  }
 
 
  delete(item) {
    //Deleta um profissional
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Atualiza a lista
      this.getAllProfissionais();
    });
  }
 
}