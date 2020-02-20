
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NewsCard from '../../components/NewsCard';

const NewsContainer = () => {
	const [news, setNews] = useState([]);
	const fetchNews = async () => {
		const url = 'http://localhost:3004/articles'; // Mock json server url
		const response = await fetch(url);
		const result = await response.json();
		setNews(result.articles);
	};
  
	useEffect(() => {
		fetchNews();
	});

	return (<Container>
		<Row>
			{news.map(article => (
				<Col key={article.title} lg={4} md={6} sm={12}>
					<NewsCard article={article}></NewsCard>
				</Col>
			))}
		</Row>
	</Container>);
};

export default NewsContainer;