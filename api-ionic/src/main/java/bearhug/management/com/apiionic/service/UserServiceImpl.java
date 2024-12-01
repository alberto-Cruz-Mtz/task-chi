package bearhug.management.com.apiionic.service;

import bearhug.management.com.apiionic.entity.UserEntity;
import bearhug.management.com.apiionic.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements IUserService {

    private final UserRepository userRepository;

    @Override
    public boolean login(String username, String password) {
        Optional<UserEntity> user = userRepository.findByUsernameAndPassword(username, password);
        return user.isPresent();
    }

    @Override
    public boolean register(String username, String password) {
        boolean exists = userRepository.existsByUsername(username);
        if (!exists) {
            userRepository.save(UserEntity.builder().username(username).password(password).build());
            return true;
        }
        return false;
    }
}
