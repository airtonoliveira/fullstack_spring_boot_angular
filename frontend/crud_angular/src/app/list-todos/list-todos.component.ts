import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/data/todo.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id:number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  /*todos = [
    new Todo (1, 'Study', false, new Date()),
    new Todo (2, 'Work', false, new Date()),
    new Todo (3, 'Play', false, new Date())
  ]*/

  todos : Todo[]
  message:string

  constructor(
    private todoService:TodoService,
    private router:Router
  ) { 
    
  }

  ngOnInit(): void {
    this.refreshTodos();
  }

  getUser(){
    return sessionStorage.getItem('authenticatedUser');
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos(this.getUser()).subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    this.todoService.deleteTodo(this.getUser(), id).subscribe(
      response => {
        this.message=`Delete of Todo ${id} Successful!`
        this.refreshTodos();
      }
    )
  }

  
  updateTodo(id){
     this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
 }

}
