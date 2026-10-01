import styled from 'styled-components';

const filters = ['All', 'Active', 'Completed'];

const FilterBox = styled.ul`
	display: flex;
	align-items: center;
`;

const FilterTab = styled.li`
	margin-left: 2rem;
`;

const Button = styled.button`
	font-size: 1.125rem;
	font-weight: ${({ $active }) => $active ? 700 : 500};
	${({ $active }) => $active && 'color: var(--color-point);'}
`;

export default function Filter({ filter, setFilter }) {
	return (
		<FilterBox>
			{filters.map((f, i) => (
				<FilterTab key={i}>
					<Button $active={filter === f} aria-label={`${f} 항목 보기`} onClick={() => setFilter(f)}>{f}</Button>
				</FilterTab>
			))}
		</FilterBox>
	)
}
