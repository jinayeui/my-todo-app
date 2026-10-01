import styled, { css, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import List from './components/List';
import Editor from './components/Editor';
import { useState, useRef } from 'react';

const todoData = [
	{
		id: 1,
		isDone: false,
		content: '밥먹기',
		label: 'todo-1'
	},
	{
		id: 2,
		isDone: false,
		content: '잠자기',
		label: 'todo-2'
	},
	{
		id: 3,
		isDone: false,
		content: '영화보기',
		label: 'todo-3'
	}
];

const Wrapper = styled.div`
	width: 100%;
	overflow: hidden;
	background-color: #fefefe;

	${({ theme }) => theme.darkMode && css`
		background-color: #2b2b2b;
		color: #fff;
	`}
`;

const Container = styled.div`
	margin: 0 auto;
	width: min(700px, 100%);
	height: 100vh;
	padding: 1rem 0;
`;

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [todos, setTodos] = useState(todoData);
	const [filter, setFilter] = useState('All');
	const idRef = useRef(4);
	const labelRef = useRef(4);

	const createTodo = (content) => {
		const newTodo = {
			id: idRef.current++,
			isDone: false,
			content: content,
			label: `todo-${labelRef.current++}`
		};

		setTodos([...todos, newTodo]);
	};

	const checkTodo = (targetId) => {
		setTodos(
			todos.map(todo => 
				todo.id === targetId 
				? {...todo, isDone: !todo.isDone} 
				: todo
			)
		);
	};

	const deleteTodo = (targetId) => {
		setTodos(
			todos.filter(todo => todo.id !== targetId)
		);
	};

	const filteredTodos = todos.filter(todo => {
		switch (filter) {
			case 'All':
				return true;
			case 'Active':
				return !todo.isDone;
			case 'Completed':
				return todo.isDone;
			default:
				return true;
		}
	});

	return (
		<ThemeProvider theme={{ darkMode }}>
			<Wrapper>
				<Container>
					<Header darkMode={darkMode} setDarkMode={setDarkMode} filter={filter} setFilter={setFilter} />
					<List checkTodo={checkTodo} deleteTodo={deleteTodo} filteredTodos={filteredTodos} />
					<Editor createTodo={createTodo} />
				</Container>
			</Wrapper>
		</ThemeProvider>
	);
}

export default App;