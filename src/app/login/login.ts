import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
     FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
fazerlogin() {
throw new Error('Method not implemented.');
}
  email = '';
  senha = '';    

    fazerLogin(){
      if(this.email === 'admin@teste.com' && this.senha === '1234'){
        alert('Login realizado com sucesso!');
      } else {
        alert('Email ou senha incorretos!');
      }
    }
}
