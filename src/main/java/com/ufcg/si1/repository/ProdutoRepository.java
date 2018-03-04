package com.ufcg.si1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ufcg.si1.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{

}
