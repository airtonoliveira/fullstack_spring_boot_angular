package com.alco.webservice.resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alco.webservice.model.AuthenticationBean;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {
		
		@GetMapping(path = "/basicauth")
		public AuthenticationBean helloWorldBean() {
			return new AuthenticationBean("You're authenticated!");
		}

}
