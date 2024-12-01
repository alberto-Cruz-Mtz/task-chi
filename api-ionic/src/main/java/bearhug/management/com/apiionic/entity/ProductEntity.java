package bearhug.management.com.apiionic.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.math.BigInteger;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "producto")
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String code;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private String sale;
    @Column(nullable = false)
    private BigDecimal purchasePrice;
    @Column(nullable = false)
    private BigDecimal salesprice;
    @Column(nullable = false)
    private BigDecimal mayoreo;
    @Column(nullable = false)
    private String category;
    @Column(nullable = false)
    private double quantity;
}
