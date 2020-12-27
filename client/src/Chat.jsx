import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery,useMutation, } from '@apollo/client';
import { Container,Row, Col, FormInput, Button } from 'shards-react';

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

const posting =gql`
mutation($user:String!, $content:String!)
{
  postMessage(user:$user,content:$content)
}`;
const Messages = ({ user }) => {
	const { data } = useQuery(messaging,{pollInterval: 350});
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

	{user != messageUser && (
	<div
		style ={{
		height: 60,
		width: 60,
		marginRight: '0.5em',
		border: '1.5px solid #e5e6ea',
		borderRadius : 30,
		textAlign: 'center',
		fontSize: '18pt',
		paddingTop :5,
		}}
	>
	{messageUser.slice(0,2).toUpperCase()}
	</div>
	)}
	<div
	style ={{ background : user == messageUser ? "#0000FF" : "#00FFFF",
	color : user ==messageUser ? "white" : "black",
	padding : "1em",
	borderRadius : "1em",
	maxWidth : "55%"}} >
	{content}
	</div>
	</div> ))}
	</>
	);
}
const Chat = () => {
	const [state,stateSet]=React.useState({user : "Shivesh",content:"",});

	const [postMessage]=useMutation(posting);
	const Sent =() => {
	if (state.content.length!=0)
	{postMessage({variables: state,});
	}
	stateSet({...state,content: '',});};
	return (<Container>
	 <Messages user ={state.user} />
	 <Row>
	 <Col xs={2} style={{padding: 0}}>
	 <FormInput
	 label="User"
	 value={state.user}
	 onChange={(evt) => stateSet({ 
	 ...state, 
	 user: evt.target.value,})}/>
	 </Col>
	 
	 <Col xs={9}>
	 <FormInput
	 label="Content"
	 value={state.content}
	 onChange={(evt) => stateSet({ ...state, content: evt.target.value,})}
	 onKeyUp={(evt)=>{
	 if (evt.keyCode == 13){Sent()}}}/>
	 </Col>
	 
	 <Col xs={3} style ={{ padding : 0}} >
	 <Button onClick ={() => Sent()}>
	 Send
	 </Button>
	 </Col>
	 </Row>
	 </Container>)
}

export default () => (
<ApolloProvider client={client}>
<Chat />
</ApolloProvider>
)