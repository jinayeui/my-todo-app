import styled from 'styled-components';
import Filter from './Filter';
import { IoSunny, IoSunnyOutline } from 'react-icons/io5';

const HeaderWrap = styled.header`
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Mode = styled.button`
	width: 3rem;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 2rem;
		height: 2rem;
	}
`;

export default function Header({ darkMode, setDarkMode, filter, setFilter }) {
	const changeMode = () => setDarkMode(!darkMode);
	
	return (
		<HeaderWrap>
			<Mode
				onClick={changeMode}
				aria-label="모드 변경하기"
			>
				{darkMode ? <IoSunny /> : <IoSunnyOutline />}
			</Mode>
			<Filter filter={filter} setFilter={setFilter} />
		</HeaderWrap>
	)
}
