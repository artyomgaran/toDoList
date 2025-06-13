/* eslint-disable react/prop-types */

import styles from './sortbutton.module.css';

export const SortButton = ({ isSorted, setIsSorted }) => {
	return (
		<button className={styles['sort-button']} onClick={() => setIsSorted(!isSorted)}>
			{isSorted ? 'Отключить сортировку' : 'Сортировать A-Z'}
		</button>
	);
};
