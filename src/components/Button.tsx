import styles from '@components/Button.module.css'

export interface ButtonProps {
	label?: string,
	onClick?: () => void;
}

export function Button({ label = "", onClick = () => { } }: ButtonProps) {
	return <button className={styles.buttonContainer} onClick={onClick}>
		{label}
	</button>
}
