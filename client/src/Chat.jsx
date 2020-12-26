import React from 'react';

import { ApolloClient, InMemoryCache,ApolloProvider,gql,useQuery, } from '@apollo/client';
import { Container } from 'shards-react';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const messaging = gql`
query{
	messages{
	id
	content
	user
	}
}`;

const Messages = ({ user }) => {
	const { data } = useQuery(messaging);
	if (!data) {return null;}
	return (
	<>
	{data.messages.map(({ id,user: messageUser, content}) => (
	<div
	style={{
	display: 'flex',
	justifyContent:user==messageUser ? 'flex-end' : 'flex-start',
	paddingBottom: "1em",
	}
	} >
	
	<div
	style ={{ background : user == messageUser ? "#0000FF" : "#00FFFF",
	color : user ==messageUser ? "white" : "black",
	padding : "1em",
	borderRadius : "1em",
	maxWidth : "60%"}} >
	{content}
	</div>
	</div> ))};
	</>
	);
};
const Chat = () => {
	return (<Container> <Messages user ="Shivesh" /></Container>)
}

export default () => (
<ApolloProvider client={client}>
<Chat />
</ApolloProvider>
)