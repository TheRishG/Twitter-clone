/** @format */

import React from 'react';
import './Feed.css';
import Tweetbox from './Tweetbox';
import { db } from '../firebase';
import {
	doc,
	onSnapshot,
	collection,
	query,
	getDoc,
	docs,
} from 'firebase/firestore';
import FlipMove from 'react-flip-move';

import Post from './Post';

const Feed = () => {
	const [posts, setPosts] = React.useState([]);
	React.useEffect(() => {
		onSnapshot(db, (querySnapshot) => {
			const docData = querySnapshot.docs.map((e) => e.data());
			setPosts(docData.reverse());
		});
	}, []);
	return (
		<div className='Feed'>
			<div className='Feed-Header'>
				<h2>Home</h2>
			</div>
			<Tweetbox />
			<FlipMove>
				{posts.map((post) => {
					return (
						<Post
						    key={Math.floor(Math.random() * 1000000000)}
							displayName={post.displayName}
							username={post.username}
							verified={post.verified}
							text={post.text}
							avatar={post.avatar}
							image={post.image}
						/>
					);
				})}
			</FlipMove>
		</div>
	);
};

export default Feed;
