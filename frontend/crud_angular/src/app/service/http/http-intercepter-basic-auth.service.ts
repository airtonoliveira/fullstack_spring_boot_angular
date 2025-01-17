import { BasicAuthenticationService } from './../basic-authentication.service';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService : BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    //  let username = 'airton'
    //  let password = '123'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
   
    // request = request.clone({
    //   setHeaders : {
    //       Authorization : basicAuthHeaderString
    //     }
    //   }) 

    //   return next.handle(request);
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    if(basicAuthHeaderString && username) { 
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        }) 
    } 
    return next.handle(request);
    
  }


}