import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { format } from 'date-fns';
import './NewsCard.css';

const NewsCard = ({article}) => {
	const buildDate = (date) =>{
		return format(new Date(date), 'MMMM d, yyyy');
	};

	return (<Card>
		<CardBody>
			<CardTitle>{article.title}</CardTitle>
		</CardBody>
		<CardImg top width="50%" src={article.urlToImage} alt="Card image cap" />
		<CardBody>
			<div className="author-source-row">
				<CardText>{article.source.name}</CardText>
				<CardText>By {article.author}</CardText>
			</div>
			<CardText>{article.description}</CardText>
			<CardText>
				<small className="text-muted">{buildDate(article.publishedAt)}</small>
			</CardText>
		</CardBody>
	</Card>);
};

export default NewsCard;