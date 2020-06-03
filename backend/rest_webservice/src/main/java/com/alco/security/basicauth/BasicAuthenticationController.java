package com.alco.security.basicauth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {
		
		@GetMapping(path = "/basicauth")
		public Authentication helloWorldBean() {
			return new Authentication("You're authenticated!");
		}

}
