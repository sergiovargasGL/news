import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './header.css';


const Header = () => {
	return (
		<header className="App-header">
			<Container>
				<Row>
					<Col className="header">
						<h1>
              News Feed
						</h1>
						<h2>
              Powered by <a href="https://newsapi.org/">NewsAPI.org</a>
						</h2>
					</Col>
				</Row>
			</Container>
		</header>);
};

export default Header;