import { useEffect, useState } from 'react';
import styles from './Input.module.css';

export interface InputProps {
	label?: string;
	type?: "text" | "number" | "checkbox";
	placeholder?: string;
}

export function Input({ label = "", type = "text", placeholder = "" }: InputProps) {

	const [active, setActive] = useState(false);
	const [classGroup, setClassGroup] = useState({ input: "", label: "" });

	useEffect(() => {
		const { input, inputActive, label, labelActive } = styles;
		setClassGroup({
			input: active ? inputActive : input,
			label: active ? labelActive : label,
		})
	}, [active])

	function onInputBlur() {
		setActive(false);
	}

	function onInputFocus() {
		setActive(true);
	}

	return (
		<article className={styles.inputContainer}>
			<label className={classGroup.label}>{label}</label>
			<input className={classGroup.input} type={type} placeholder={placeholder} onFocus={onInputFocus} onBlur={onInputBlur} />
		</article>
	)
}
