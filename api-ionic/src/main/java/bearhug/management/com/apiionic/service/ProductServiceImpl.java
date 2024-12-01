package bearhug.management.com.apiionic.service;

import bearhug.management.com.apiionic.entity.ProductEntity;
import bearhug.management.com.apiionic.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ProductServiceImpl implements IProductService {

    private final ProductRepository productRepository;

    @Override
    public boolean addProduct(ProductEntity product) {
        boolean exists = productRepository.existsByCode(product.getCode());
        if (exists) return false;
        productRepository.save(product);
        return true;
    }

    @Override
    public boolean updateProduct(String code, ProductEntity product) {
        Optional<ProductEntity> productOptional = productRepository.findByCode(code);
        if (productOptional.isPresent()) {
            product.setId(productOptional.get().getId());
            productRepository.save(product);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteProduct(String code) {
        Optional<ProductEntity> productOptional = productRepository.findByCode(code);
        if (productOptional.isPresent()) {
            productRepository.deleteById(productOptional.get().getId());
            return true;
        }
        return false;
    }

    @Override
    public Iterable<ProductEntity> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public ProductEntity getProductByCode(String code) {
        return productRepository.findByCode(code).orElse(null);
    }
}
