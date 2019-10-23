import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Profissional} from '../models/profissional';

@Component({
  selector: 'app-professional-inserir',
  templateUrl: './professional-inserir.page.html',
  styleUrls: ['./professional-inserir.page.scss'],
})
export class ProfessionalInserirPage implements OnInit {

   
    data: Profissional
   
    constructor(
      public apiService: ApiService,
      public router: Router
    ) {
      this.data = new Profissional();
    }
   
    ngOnInit() {
    }
   
    submitForm() {
      this.apiService.createItem(this.data).subscribe((response) => {
        this.router.navigate(['professional-list']);
      });
   
    }
   
  }
