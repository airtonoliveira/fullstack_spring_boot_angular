import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'airton';
  password = '';
  errorMessage = 'Invalid credentials';
  invalidateLogin = false;

  constructor(
    private router: Router,
    private hardCodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService
  ) { 

  }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardCodedAuthenticationService.authenticate(this.username, this.password)){
        this.invalidateLogin= false;
        this.router.navigate(['welcome', this.username]);
    }else{
      this.invalidateLogin= true;
    }
  }

  handleBasicAuthLogin(){
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username]);
            this.invalidateLogin= false;          
          },
          error=>{
            console.log(error)
            this.invalidateLogin= true;
          }
        )
  }

  handleJWTAuthLogin(){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username]);
            this.invalidateLogin= false;          
          },
          error=>{
            console.log(error)
            this.invalidateLogin= true;
          }
        )
  }

}
