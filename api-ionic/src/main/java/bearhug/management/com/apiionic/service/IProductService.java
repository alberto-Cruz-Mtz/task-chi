package bearhug.management.com.apiionic.service;

import bearhug.management.com.apiionic.entity.ProductEntity;

import java.util.List;

public interface IProductService {

    boolean addProduct(ProductEntity product);

    boolean updateProduct(String code, ProductEntity product);

    boolean deleteProduct(String code);

    Iterable<ProductEntity> getAllProducts();

    ProductEntity getProductByCode(String code);
}
