package bearhug.management.com.apiionic.controller;

import bearhug.management.com.apiionic.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserServiceImpl userService;

    @PostMapping("/log-in")
    public ResponseEntity<?> login(@RequestBody UserDto user) {
        boolean result = userService.login(user.username(), user.password());
        if (!result) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseSimple<String>(false, "no se encontro el usuario", null));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseSimple<String>(true, "Bienvenido de regreso " + user.username(), null));
    }

    @PostMapping("/sign-up")
    public ResponseEntity<?> signup(@RequestBody UserDto user) {
        boolean result = userService.register(user.username(), user.password());
        if (!result) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(new ResponseSimple<String>(false, "este correo no se encuentra disponible", null));
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseSimple<String>(true, "felicidades ".concat(user.username()).concat(" ya estas registrado"), null));
    }
}
