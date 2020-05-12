import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate (username, password){

    if(username==="airton" && password === "123"){
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }else{
      return false;
    }

  }

  isUserLoggedIn (){
    return !(sessionStorage.getItem('authenticatedUser')===null);
  }

  logout (){
      sessionStorage.removeItem('authenticatedUser');
  }

}
