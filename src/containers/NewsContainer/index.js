
import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NewsCard from '../../components/NewsCard';
import FilterBar from '../../components/FilterBar';
import { connect } from 'react-redux';
import { getArticles, filterArticles } from '../../redux/actionCreators/articles';
import './NewsContainer.css';

const NewsContainer = (props) => {
  const { getArticles, filterArticles, articles, loading, error, actualPage, totalPages } = props;

  const handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {;
      getArticles(actualPage + 1);
    }
  }

  useEffect(() => {
    getArticles(actualPage + 1);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  },[articles])
  return (
    <div onScroll={handleScroll}>
      <Container className={'super-container'} >
        <Row>
          <FilterBar onChange={filterArticles} />
        </Row>
        <Row>
          {articles.map(article => (
            <Col key={article.title} lg={4} md={6} sm={12}>
              <NewsCard article={article}></NewsCard>
            </Col>
          ))}
        </Row>
        {actualPage < totalPages &&
          <Row>
            <Button onClick={() => getArticles(actualPage + 1)}>Load more</Button>
          </Row>}
      </Container>
    </div>
  )
};

const mapStateToProps = state => ({
  articles: state.elements,
  loading: state.loading,
  totalPages: state.totalPages,
  actualPage: state.actualPage,
  error: state.error
});

const mapDispatchToProps = {
  getArticles,
  filterArticles
};


export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);