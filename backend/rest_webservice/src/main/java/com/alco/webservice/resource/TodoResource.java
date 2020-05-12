package com.alco.webservice.resource;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.alco.webservice.model.TodoBean;
import com.alco.webservice.service.TodoHardcodedService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {
	
		@Autowired
		private TodoHardcodedService todoService;
		
		@GetMapping("/users/{username}/todos")
		public List<TodoBean> getAllTodos(@PathVariable String username){
			return todoService.findAll();
		}
		
		//@RequestMapping(path = "//users/{username}/todos/{id}", method = {RequestMethod.GET})
		@GetMapping("/users/{username}/todos/{id}")
		public TodoBean getTodo(
				@PathVariable String username,
				@PathVariable long id){
			return todoService.findById(id);
		}
		
		@DeleteMapping("/users/{username}/todos/{id}")
		public ResponseEntity<Void> deleteTodoByID(
				@PathVariable String username,
				@PathVariable long id){
			TodoBean todo = todoService.deleteById(id);
			if(todo!=null) {
				return ResponseEntity.noContent().build();
			}			
			return ResponseEntity.notFound().build();
		}
		
		@PutMapping("/users/{username}/todos/{id}")
		public ResponseEntity<TodoBean> updateTodo(
				@PathVariable String username,
				@PathVariable long id,
				@RequestBody TodoBean todo){
			TodoBean todoUpdated= todoService.save(todo);
			return new ResponseEntity<TodoBean>(todoUpdated, HttpStatus.OK);
		}
		
		@PostMapping("/users/{username}/todos")
		public ResponseEntity<Void> addTodo(
				@PathVariable String username,
				@RequestBody TodoBean todo){
			TodoBean todoUpdated= todoService.save(todo);
			
			URI uri = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(todoUpdated.getId())
				.toUri();
			
			return ResponseEntity.created(uri).build();
		}

}
