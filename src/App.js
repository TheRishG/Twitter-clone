/** @format */

import React from 'react';
import Sidebar from './SideBar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';
const App = () => {
	return (
		<div className='App'>
			<Sidebar />
			<Feed />
			<Widgets />
		</div>
	);
};

export default App;
