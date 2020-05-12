package com.alco.webservice;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class ObterSenhaCriptografada {

	public static void main(String[] args) {
		String senha = new BCryptPasswordEncoder().encode("airton123");
		System.out.println(senha);
	}

}
