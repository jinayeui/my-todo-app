import styled from 'styled-components';
import { useState, useRef } from 'react';

const EditBox = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 0;
	width: 100%;
	padding: 0.6rem 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input`
	width: 90%;
	height: 3rem;
	margin-right: 0.5rem;
	padding: 0 0.8rem;
	font-size: 1rem;
	border: 1px solid #ddd;
	border-radius: 5px;

	&:focus,
	&:active {
		box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
	}
`;

const Button = styled.button`
	width: 5rem;
	height: 3rem;
	background-color: var(--color-point);
	border-radius: 5px;
	color: #fff;
	font-size: 1rem;
	font-weight: 600;
`;

export default function Editor({ createTodo }) {
	const [content, setContent] = useState('');
	const contentRef = useRef();

	const changeContent = (e) => {
		setContent(e.target.value);
	};

	const submitTodo = () => {
		if (content.trim() === '') {
			contentRef.current.focus();
			return;
		}
		createTodo(content);
		setContent('');
	};

	const onKeyDown = (e) => {
		if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
			submitTodo();
		}
	};

	return (
		<EditBox>
			<Input 
				ref={contentRef}
				type="text" 
				placeholder="할 일을 적어주세요📝" 
				value={content}
				onChange={changeContent}
				onKeyDown={onKeyDown}
			/>
			<Button 
				onClick={submitTodo}
				aria-label="투두 입력하기"
			> 
				ADD
			</Button>
		</EditBox>
	)
}