import { useMemo } from 'react';

export const useFilteredAndSortedToDos = (toDos, searchQuery, isSorted) => {
	return useMemo(() => {
		const filtered = toDos.filter((todo) =>
			todo.title.toLowerCase().includes(searchQuery.toLowerCase()),
		);

		if (isSorted) {
			return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
		}

		return filtered;
	}, [toDos, searchQuery, isSorted]);
};
