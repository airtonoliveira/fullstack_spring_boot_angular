import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/data/todo.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo:Todo

  constructor(
    private route:ActivatedRoute,
    private todoService:TodoService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'',false, new Date());
    if(this.id !=-1){
      this.todoService.retrieveTodo('airton', this.id)
      .subscribe(
          data => this.todo = data
      )
    }
  }

  public saveTodo(){

    if(this.id ===-1){
      this.todoService.addTodo('airton',this.todo)
      .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
      )
    }else{
      this.todoService.updateTodo('airton', this.id, this.todo)
      .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
      )
    }
  }

}
