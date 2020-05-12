import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldResponse{
  constructor(
    public message:string
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldResponse>(`${API_URL}/hellobean`);
  }

  executeHelloWorldPathService(name){
    //let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let header = new HttpHeaders({
    //      Authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldResponse>(`${API_URL}/hellobean/pathvariable/${name}`,
       //{headers:header}
       //OU
       // {headers} O nome do atributo se torna o nome da propria variavel
    );
  }

  /*createBasicAuthenticationHttpHeader(){
    let username = "airton";
    let password = "123";
    let bascAuthenticationString = 'Basic ' + window.btoa(username + ':' + password);
    return bascAuthenticationString;
  }*/

}
