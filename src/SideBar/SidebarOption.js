/** @format */

import React from 'react';

const SidebarOption = ({ Icon, text, active }) => {
	return (
		<div className={`SidebarOption ${active && 'SidebarOption--active'}`}>
			<Icon /> <h2>{text}</h2>
		</div>
	);
};

export default SidebarOption;
