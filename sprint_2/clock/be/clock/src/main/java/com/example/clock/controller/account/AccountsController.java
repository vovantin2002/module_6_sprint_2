package com.example.clock.controller.account;


import com.example.clock.config.accounts.JwtTokenUtil;
import com.example.clock.model.Accounts;
import com.example.clock.model.Customers;
import com.example.clock.service.account.IAccountService;
import com.example.clock.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/user")
public class AccountsController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private IAccountService appUserService;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private ICustomerService customerService;

    @PostMapping("/login")
    public ResponseEntity<?> loginByUserName(@RequestBody Accounts appUserDto) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    appUserDto.getUsername(), appUserDto.getPassword()));
        } catch (DisabledException e) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Tài khoản của bạn đã bị vô hiệu hoá");
        } catch (BadCredentialsException e) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Đăng nhập thất bại");
        }

        UserDetails userDetails = appUserService.loadUserByUsername(appUserDto.getUsername());

        String jwtToken = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(jwtToken);
    }
    @GetMapping("/getId")
    public ResponseEntity<?> getIdByUserName(@RequestParam("userName") String userName) {
        Integer id=appUserService.findAccontsByUserName(userName).getAccountId();
        return new  ResponseEntity<>(id,HttpStatus.OK);
    }
    @GetMapping("")
    public ResponseEntity<?> getAccountByUserName(@RequestParam("userName") String userName) {
        Accounts accounts=appUserService.findAccontsByUserName(userName);
        return new  ResponseEntity<>(accounts,HttpStatus.OK);
    }
    @PostMapping("")
    public ResponseEntity<?> add(@RequestBody Accounts accounts){
        boolean existsByUsername = appUserService.existsByUsername(accounts.getUsername());
        if (existsByUsername) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body("Tài khoản này đã tồn tại");
        }
        Customers customers=new Customers();
        customerService.add(customers);
        accounts.setCustomers(customers);
        accounts.setPassword(passwordEncoder.encode(accounts.getPassword()));
        appUserService.add(accounts);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}