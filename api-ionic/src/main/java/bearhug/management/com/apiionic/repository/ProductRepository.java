package bearhug.management.com.apiionic.repository;

import bearhug.management.com.apiionic.entity.ProductEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends CrudRepository<ProductEntity, Long> {
    boolean existsByCode(String code);
    Optional<ProductEntity> findByCode(String code);
}
