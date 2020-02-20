
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NewsCard from '../../components/NewsCard';
import FilterBar from '../../components/FilterBar';
import { connect } from 'react-redux';
import { getArticles, filterArticles } from '../../redux/actionCreators/articles';

const NewsContainer = (props) => {
  const { getArticles, filterArticles, articles, loading, error } = props;

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Container>
      <Row>
        <FilterBar onChange={filterArticles}/>
      </Row>
      <Row>
        {loading && !error ? 'Loading...' :
          articles.map(article => (
            <Col key={article.title} lg={4} md={6} sm={12}>
              <NewsCard article={article}></NewsCard>
            </Col>
          ))}
      </Row>
    </Container>);
};

const mapStateToProps = state => ({
  articles: state.elements,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = {
  getArticles,
  filterArticles
};


export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);