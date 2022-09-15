import { CSSProperties, useEffect, useState } from 'react';
import styles from './Stack.module.css';

export interface StackProps {
	elements: React.ReactElement[],
	orientation: "horizontal" | "vertical",
	gap?: number,
}

export function Stack({ elements, orientation, gap = 0.5 }: StackProps) {
	const [gridStyle, setGridStyle] = useState<CSSProperties>({});
	useEffect(() => {
		const { length } = elements;
		const template = `repeat(${length}, 1fr)`
		if (orientation == "horizontal")
			setGridStyle({
				gridTemplateColumns: template,
				gap: `${gap}rem`,
			})
		else
			setGridStyle({
				gridTemplateRows: template,
				gap: `${gap}rem`,
			})
	}, [elements, orientation])
	return <section className={styles.container} style={gridStyle}>
		{elements.map(el => el)}
	</section>
}
