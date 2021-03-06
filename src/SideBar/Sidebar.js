/** @format */

import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

const Sidebar = () => {
	return (
		<div className='Sidebar'>
			<TwitterIcon />
			<SidebarOption active Icon={HomeIcon} text='Home' />
			<SidebarOption Icon={SearchIcon} text='Explore' />
			<SidebarOption Icon={NotificationsNoneIcon} text='Alerts' />
			<SidebarOption Icon={MailOutlineIcon} text='Messages' />
			<SidebarOption Icon={BookmarkBorderIcon} text='Saved' />
			<SidebarOption Icon={ListAltIcon} text='Lists' />
			<SidebarOption Icon={PermIdentityIcon} text='Profile' />
			<SidebarOption Icon={MoreHorizIcon} text='More' />

			<Button variant='outlined' fullWidth>
				Tweet
			</Button>
		</div>
	);
};

export default Sidebar;
