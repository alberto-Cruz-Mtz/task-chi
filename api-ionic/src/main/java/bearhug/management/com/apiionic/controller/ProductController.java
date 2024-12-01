package bearhug.management.com.apiionic.controller;

import bearhug.management.com.apiionic.entity.ProductEntity;
import bearhug.management.com.apiionic.service.ProductServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/product")
public class ProductController {

    private final ProductServiceImpl productService;

    @PostMapping
    public ResponseEntity<?> addProduct(@RequestBody ProductEntity productEntity) {
        boolean result = productService.addProduct(productEntity);
        if(!result) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(new ResponseSimple<String>(false, "este producto ya existe", null));
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseSimple<String>(result, "producto agregado", null));
    }

    @PutMapping("/{code}")
    public ResponseEntity<?> updateProduct(@PathVariable String code, @RequestBody ProductEntity productEntity) {
        boolean result = productService.updateProduct(code, productEntity);
        if(!result) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseSimple<String>(false, "este producto no existe", null));
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseSimple<String>(true, "producto actualizado", null));
    }

    @DeleteMapping("/{code}")
    public ResponseEntity<?> deleteProduct(@PathVariable String code) {
        boolean result = productService.deleteProduct(code);
        if(!result) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseSimple<String>(false, "este producto no existe", null));
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseSimple<String>(true, "producto elimado", null));
    }

    @GetMapping
    public ResponseEntity<?> findAllProducts() {
        Iterable<ProductEntity> all = productService.getAllProducts();
        return ResponseEntity.ok(new ResponseSimple<>(true, "productos encontrados", all));
    }

    @GetMapping("/{code}")
    public ResponseEntity<?> findProductByCode(@PathVariable String code) {
        ProductEntity product = productService.getProductByCode(code);
        if (product == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseSimple<String>(false, "no se encontro el producto", null));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseSimple<>(true, "producto encontrado", product));
    }
}
