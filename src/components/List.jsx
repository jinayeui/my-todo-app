import styled from 'styled-components';
import { ImBin } from "react-icons/im";

const TodoBox = styled.div`
	height: 72%;
	overflow-y: auto;
`;

const TodoList = styled.ul`
	padding: 0 1.2rem;
`;

const TodoItem = styled.li`
	border-bottom: 1px solid ${({ theme }) => theme.darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.1)'};
	padding: 1.8rem 1rem;
`;

const Empty = styled.li`
	padding: 1.8rem 1rem;
	text-align: center;
	font-weight: 600;
	font-size: 1.25rem;
	color: ${({ theme }) => theme.darkMode ? 'rgba(255,255,255,0.3)' : '#dddddd'};
`;

const Content = styled.label`
	text-align: left;
	margin-left: 1rem;
	width: 80%;
	font-size: 1.125rem;
`;

const Input = styled.input`
	width: 0.9rem;
	height: 0.9rem;

	&:checked + ${Content} {
		text-decoration: line-through;
		color: #bebebe;
	}
`;

const Button = styled.button`
	width: 1.8rem;
	height: 1.8rem;
	border-radius: 50%;
	background-color: #bebebe;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	right: 1rem;
	transform: translateY(-50%);

	svg {
		fill: #fff;
		width: .9rem;
		height: .9rem;
	}
`;

export default function List({ checkTodo, deleteTodo, filteredTodos }) {
	return (
		<TodoBox>
			<TodoList>
				{filteredTodos.length === 0 ? (
					<Empty>완료한 일이 없어요!</Empty>
				) : (
					filteredTodos.map(todo => {
						return (
							<TodoItem key={todo.id}>
								<Input 
									id={todo.label}
									type="checkbox" 
									checked={todo.isDone}
									onChange={() => checkTodo(todo.id)}
								/>
								<Content htmlFor={todo.label}>
									{todo.content}
								</Content>
								<Button 
									aria-label="투두 삭제하기"
									onClick={() => deleteTodo(todo.id)}
								>
									<ImBin />
								</Button>
							</TodoItem>
						)
					})
				)}
			</TodoList>
		</TodoBox>
	)
}
