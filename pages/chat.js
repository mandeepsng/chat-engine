import React from 'react';
import { ChatEngine } from 'react-chat-engine';

export function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='admin'
			userSecret='Admin'
			projectID='cd49edba-45f7-4a5d-9f83-88d463715d93'
		/>
	);
}