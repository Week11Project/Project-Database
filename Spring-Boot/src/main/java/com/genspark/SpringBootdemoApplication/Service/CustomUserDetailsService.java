package com.genspark.SpringBootdemoApplication.Service;

import com.genspark.SpringBootdemoApplication.Dao.UserDao;
import com.genspark.SpringBootdemoApplication.Entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

  @Autowired
  private UserDao userDao;
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    List<Users> list = this.userDao.findAll();
    Users userFound = null;
    for (int i = 0; i < list.size(); i++) {
      if (list.get(i).getUsername().equals(username)) {
        userFound = list.get(i);
      }
    }

    if (userFound == null) {
      throw new RuntimeException("Username not found for username in the UserDetailsService ::" + username);
    }

    System.out.println(new SimpleGrantedAuthority(userFound.getRole()));


    return new  org.springframework.security.core.userdetails.User(userFound.getUsername(),userFound.getPassword(),Arrays.stream(userFound.getRole().split("_")).collect(Collectors.toList()).stream().map(role -> new SimpleGrantedAuthority(role)).collect(Collectors.toList()));
    //      Arrays.stream(userFound.getRole().split(":")).toList().stream().map((role)->new SimpleGrantedAuthority(role)).collect(Collectors.toList()));

  }
}
