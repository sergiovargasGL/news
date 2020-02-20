import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { format } from 'date-fns';
import './NewsCard.css';

const NewsCard = ({ article }) => {
	const buildDate = (date) => {
		return format(new Date(date), 'MMMM d, yyyy');
	};

	const sliceAuthor = (author) => author.length > 15 ? `${author.slice(0, 13)}...` : author;

	return (
		<Card>
			<CardBody>
				<a href={article.url}>
					<CardTitle className="article-title">{article.title}</CardTitle>
				</a>
			</CardBody>
			<CardImg top className="article-image" src={article.urlToImage} alt="Card image cap" />
			<CardBody>
				<div className="author-source-row">
					<CardText>{article.source.name}</CardText>
					<CardText>{article.author ? `By ${sliceAuthor(article.author)}` : 'Unknown author'}</CardText>
				</div>
				<CardText className="article-description">{article.description}</CardText>
				<CardText>
					<small className="text-muted">{buildDate(article.publishedAt)}</small>
				</CardText>
			</CardBody>
		</Card>
	);
};

NewsCard.propTypes = {
	article: PropTypes.shape({
		source: PropTypes.shape({
			id: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.object
			]),
			name: PropTypes.string
		}),
		author: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		url: PropTypes.string,
		urlToImage: PropTypes.string,
		publishedAt: PropTypes.string,
		content: PropTypes.string,
	})
};

export default NewsCard;