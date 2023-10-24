package com.example.phone_store.service.account;

import java.util.ArrayList;
import java.util.List;

import com.example.phone_store.model.Accounts;
import com.example.phone_store.repository.account.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class AccountService implements IAccountService {
    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        // đầu tiên mình query xuống database xem có user  đó không
        Accounts appUser = this.accountRepository.findAccountsByUsername(userName);

        //Nếu không tìm thấy User thì mình thông báo lỗi
        if (appUser == null) {
            System.out.println("User not found! " + userName);
            throw new UsernameNotFoundException("User " + userName + " was not found in the database");
        }


        // Khi đã có user rồi thì mình query xem user đó có những quyền gì (Admin hay User)
        // [ROLE_USER, ROLE_ADMIN,..]
//        List<String> roleNames = this.a.getRoleNames(appUser.getUserId());

        // Dựa vào list quyền trả về mình tạo đối tượng GrantedAuthority  của spring cho quyền đó
        List<GrantedAuthority> grantList = new ArrayList<GrantedAuthority>();
//        if (roleNames != null) {
//            for (String role : roleNames) {
//                // ROLE_USER, ROLE_ADMIN,..
//                GrantedAuthority authority = new SimpleGrantedAuthority(role);
//                grantList.add(authority);
//            }
//        }

        //Cuối cùng mình tạo đối tượng UserDetails của Spring và mình cung cấp cá thông số như tên , password và quyền
        // Đối tượng userDetails sẽ chứa đựng các thông tin cần thiết về user từ đó giúp Spring Security quản lý được phân quyền như ta đã
        // cấu hình trong bước 4 method configure
        UserDetails userDetails = (UserDetails) new User(appUser.getUsername(),
                appUser.getPassword(), grantList);

        return userDetails;
    }

    @Override
    public Accounts findAccontsByUserName(String userName) {
        return accountRepository.findAccountsByUsername(userName);
    }

    @Override
    public void add(Accounts accounts) {
        accountRepository.save(accounts);
    }

    @Override
    public Boolean existsByUsername(String userName) {
        Accounts accounts=accountRepository.findAccountsByUsername(userName);
        return accounts!=null;
    }
}