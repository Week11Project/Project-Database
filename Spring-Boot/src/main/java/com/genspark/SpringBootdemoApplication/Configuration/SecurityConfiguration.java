package com.genspark.SpringBootdemoApplication.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
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
    //This cors method was needed
    h.cors();
    h.csrf().disable()
      .authorizeHttpRequests()
      .requestMatchers(HttpMethod.GET, "/projects","/{userid}/projects","/users")
      .permitAll()
//      .requestMatchers("/users")
////      .permitAll()
//      .hasAuthority("ADMIN")
      .requestMatchers("/authenticated")
      .authenticated()
      .requestMatchers("/login")
      .authenticated()
      .anyRequest()// Unless specified, all url pages will fall under anyRequests(). You would need to specify the type of security such as permit all or authentication for it to work. Think firewalls where the last rules deny all packets
      .authenticated()
      .and()
      .formLogin()
      .and()
      .httpBasic();

    return h.build();


  }


}
