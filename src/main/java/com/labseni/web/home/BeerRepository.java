package com.labseni.web.home.beer;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.jpa.repository.JpaRepository;
@RepositoryRestResource
interface BeerRepository extends JpaRepository<Beer, Long>{
	
}
