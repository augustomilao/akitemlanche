/*import { Cliente } from './../models/cliente';
import { Component, OnInit } from '@angular/core';
import { Auth, UserDetails, User } from "@ionic/cloud-angular";


@Component({
  selector: 'app-login',
  templateUrl: './cliente-login.page.html',
  styleUrls: ['./cliente- login.page.scss'],
})
export class LoginPage  {

  cliente: Cliente;

estaAutenticado: boolean;
email: string;
senha: string;

constructor(public auth: Auth, public user: User) {
this.estaAutenticado = this.auth.isAuthenticated();
}

cadastrar(){
let data: UserDetails = { 
'email': this.email, 
'password': this.senha 
};

this.auth.signup(data).then(() => {
// USUÁRIO CRIADO - PODE SER ACESSADO COM this.user
console.log(this.user);
}, erro => {
// TRATAR O ERRO
console.log("Erro no cadastro");
});
}

login(){
let data: UserDetails = { 
'email': this.email, 
'password': this.senha 
};

this.auth.login('basic', data).then(() => {
// LOGIN REALIZADO COM SUCESSO
console.log("Login realizado com sucesso");
}).catch(erro => {
// TRATAR O ERRO
console.log("Erro no login");
});
}

logout(){
this.auth.logout();
}


}




*/
