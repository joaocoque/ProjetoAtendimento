package br.unipe.frameworks.projetoAtend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
@EnableJpaAuditing
public class ProjetoAtendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetoAtendApplication.class, args);
	}

}