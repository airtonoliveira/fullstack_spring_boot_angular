import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/data/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  message = 'Mensagem qualquer.'
  welcomeMessage:string
  name = ''

  constructor(
    private router:ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
   // console.log(this.message);
    this.name = this.router.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log(this.userService.executeHelloWorldBeanService());
    this.userService.executeHelloWorldBeanService().subscribe(
        response => this.handlerSuccessfulResponse(response),
        error => this.handlerErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter(){
    console.log(this.userService.executeHelloWorldPathService(this.name));
    this.userService.executeHelloWorldPathService(this.name).subscribe(
        response => this.handlerSuccessfulResponse(response),
        error => this.handlerErrorResponse(error)
    );
  }

  handlerSuccessfulResponse(response){
   this.welcomeMessage=response.message;
  }

  
  handlerErrorResponse(error){
    this.welcomeMessage=error.message;
   }

}
