import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Um erro ocorreu! Entre em contato com o administrador do sistema.'

  constructor() { }

  ngOnInit(): void {
  }

}
