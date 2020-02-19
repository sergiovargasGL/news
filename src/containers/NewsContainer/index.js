
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NewsCard from '../../components/NewsCard';

const NewsContainer = () => {
	const [news, setNews] = useState([]);
	const fetchNews = async () => {
		const url = 'http://newsapi.org/v2/top-headlines?apiKey=610aafeb362046c5b9b47a1f8c335e62&country=us&sortBy=popularity&pageSize=20';
		const response = await fetch(url);
		const result = await response.json();
		setNews(result.articles);
	}
	useEffect(() => {
		// Update the document title using the browser API
		fetchNews();
	});

	return (<Container>
		<Row>
			{news.map(article => (
				<Col key={article.title} md={4} sm={12}>
					<NewsCard article={article}></NewsCard>
				</Col>
			))}
		</Row>
	</Container>);
};

export default NewsContainer;