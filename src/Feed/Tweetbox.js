/** @format */

import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import { group } from '../firebase';
import { addDoc } from '@firebase/firestore';

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');

	const addANewDoc = async () => {
		const newDoc = await addDoc(group, {
			displayName: 'RishiG',
			username: 'Rishi',
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar:
				'https://images-platform.99static.com/O_izjGcqGh7s9RM4DNUXHv2gy60=/0x0:1193x1193/500x500/top/smart/99designs-contests-attachments/105/105980/attachment_105980886',
		});
		console.log(`done${newDoc.path}`);
	};

	const sendTweet = (e) => {
		e.preventDefault();
		addANewDoc();
		setTweetMessage('');
		setTweetImage('');
	};

	return (
		<div className='tweetBox'>
			<form>
				<div className='tweetBox__input'>
					<Avatar src='https://images-platform.99static.com/O_izjGcqGh7s9RM4DNUXHv2gy60=/0x0:1193x1193/500x500/top/smart/99designs-contests-attachments/105/105980/attachment_105980886' />
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="What's happening?"
						type='text'
					/>
				</div>
				<input
					value={tweetImage}
					onChange={(e) => setTweetImage(e.target.value)}
					className='tweetBox__imageInput'
					placeholder='Optional: Enter image URL'
					type='text'
				/>

				<Button
					onClick={sendTweet}
					type='submit'
					className='tweetBox__tweetButton'>
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
