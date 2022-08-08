package me.kickscar.mysite;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
// @EnableTransactionManagement
public class MysiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(MysiteApplication.class, args);
	}
	
//	@Bean
//	public PlatformTransactionManager transactionManager(@Autowired DataSource dataSource) {
//		return new DataSourceTransactionManager(dataSource); 
//	}	
}
