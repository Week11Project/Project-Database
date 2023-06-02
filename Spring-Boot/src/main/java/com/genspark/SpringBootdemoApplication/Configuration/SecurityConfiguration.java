package com.genspark.SpringBootdemoApplication.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfiguration {

  @Bean
  public PasswordEncoder passwordEncoder(){return new BCryptPasswordEncoder();}


  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity h) throws Exception{
    h.csrf().disable()
      .authorizeHttpRequests()
      .requestMatchers("/users")
//      .permitAll()
      .hasRole("ADMIN")
      .anyRequest()// Unless specified, all url pages will fall under anyRequests(). You would need to specify the type of security such as permit all or authentication for it to work. Think firewalls where the last rules deny all packets
      .permitAll()
      .and()
      .formLogin()
      .and()
      .httpBasic();

    return h.build();


  }


}
