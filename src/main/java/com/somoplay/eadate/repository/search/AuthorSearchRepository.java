package com.somoplay.eadate.repository.search;

import com.somoplay.eadate.domain.Author;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Author entity.
 */
public interface AuthorSearchRepository extends ElasticsearchRepository<Author, Long> {
}
