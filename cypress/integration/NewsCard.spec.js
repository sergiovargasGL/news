import React from 'react';
import NewsCard from '../../src/components/NewsCard';
import * as ReactDOM from 'react-dom';
window.ReactDOM = ReactDOM;
import 'bootstrap/dist/css/bootstrap.min.css';


describe('NewsCard component', () => {
	it('Renders correctly', () => {
		const article = {
			source: {
				id: 'the-next-web',
				name: 'The Next Web'
			},
			author: 'Jori Hamilton',
			title: 'The 3 trends that define the future of cybersecurity jobs',
			description: 'With each passing year, our adoption of advanced technology becomes more pronounced. Different aspects of our lives are enhanced by the changes in our digital world, and this, in turn, reveals even greater potential. Between the widespread integration of the …',
			url: 'https://thenextweb.com/?p=1268748',
			urlToImage: 'https://img-cdn.tnwcdn.com/image/tnw?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2020%2F01%2FCopy-of-Copy-of-Copy-of-Copy-of-...-1-1.png&signature=868e44d85f113d5d19352010186dc5c7',
			publishedAt: '2020-01-30T13:54:20Z',
			content: 'With each passing year, our adoption of advanced technology becomes more pronounced. Different aspects of our lives are enhanced by the changes in our digital world, and this, in turn, reveals even greater potential. Between the widespread integration of the … [+6295 chars]'
	
		};
		cy.mount(<NewsCard article={article}/>);
		cy.contains(article.title);
		cy.get('a').should('have.attr', 'href').and('equal', article.url);
	});
});
