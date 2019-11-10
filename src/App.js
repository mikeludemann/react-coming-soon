import React from 'react';
import logo from './logo.svg';
import './App.css';

import ComingSoon from './components/coming-soon';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
        <ComingSoon
          id="countdown-timer"
          title="Test timer"
          date="2020-12-31"
          time="20:00"
          expiredText="Event has been started."
          color="#fff"
          backgroundColor="#000"
          extraText="Welcome"
        ></ComingSoon>
			</section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
		</div>
	);
}

export default App;
