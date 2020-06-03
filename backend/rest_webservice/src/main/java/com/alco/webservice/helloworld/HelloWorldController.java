package com.alco.webservice.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {

	@GetMapping(path = "/hellobean")
	public String helloWorld() {
		return "Hello World";
	}

	@GetMapping(path = "/hellobean2")
	public HelloWorld helloWorldBean() {
		//throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
		return new HelloWorld("Hello World - Changed");
	}
	
	///hello-world/path-variable/in28minutes
	@GetMapping(path = "/hellobean/pathvariable/{name}")
	public HelloWorld helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorld(String.format("Hello World, %s", name));
	}
}
