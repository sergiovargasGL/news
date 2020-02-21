
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import NewsCard from '../../components/NewsCard';
import FilterBar from '../../components/TextInput';
import { connect } from 'react-redux';
import { getArticles, filterArticles, searchArticles } from '../../redux/actionCreators/articles';
import './NewsContainer.css';

const NewsContainer = (props) => {
	const { getArticles, filterArticles, searchArticles, articles, error, totalPages, searchedQuery, loading } = props;
	const [searchQuery, setSearchQuery] = useState('');
	const [currentPage, setCurrentPage] = useState(0);
	const [searchMode, setSearchMode] = useState(false);

	const handleScroll = event => {
		const element = event.target;
		if (element.scrollHeight - element.scrollTop === element.clientHeight && currentPage < totalPages && currentPage < 5 && !loading) {
			if (searchMode) {
				searchArticles(currentPage + 1, searchedQuery);
				setCurrentPage(currentPage + 1);
			} else {
				getArticles(currentPage + 1);
				setCurrentPage(currentPage + 1);
			}
		}
	};

	const search = () => {
		searchArticles(1, searchQuery);
		setCurrentPage(1);
		setSearchMode(true);
	};

	useEffect(() => {
		getArticles(1);
		setCurrentPage(1);
	}, []);

	const scrollContainerHeight = `${window.innerHeight - 212}px`;

	if (error) {
		return (
			<Container className="error-message">
				<Row>
					<Col>
						<h1>Ooops!, something went wrong.</h1>
					</Col>
				</Row>
			</Container>
		);
	}

	return (
		<Container >
			<Row>
				<FilterBar onChange={(value) => setSearchQuery(value)} placeholder="Search articles" button buttonOnClick={search} />
			</Row>
			<Row>
				<FilterBar onChange={filterArticles} placeholder="Filter by source" />
			</Row>
			<div className="scroll-container" onScroll={handleScroll} style={{ height: scrollContainerHeight }}>
				<Row>
					{articles.map(article => (
						<Col key={article.title} lg={4} md={6} sm={12}>
							<NewsCard article={article}></NewsCard>
						</Col>
					))}
				</Row>
			</div>
		</Container>

	);
};

NewsContainer.propTypes = {
	getArticles: PropTypes.func,
	filterArticles: PropTypes.func,
	searchArticles: PropTypes.func,
	articles: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.object
			]),
			name: PropTypes.string
		})
	),
	error: PropTypes.bool,
	totalPages: PropTypes.number,
	searchedQuery: PropTypes.string,
	loading: PropTypes.bool
};

const mapStateToProps = state => ({
	articles: state.elements,
	loading: state.loading,
	totalPages: state.totalPages,
	error: state.error,
	searchedQuery: state.searchQuery
});

const mapDispatchToProps = {
	getArticles,
	filterArticles,
	searchArticles
};


export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);

