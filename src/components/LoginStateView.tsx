import { useEffect, useState } from "react"
import styles from "./LoginStateView.module.css"

export interface LoginStateProps {
	auth: boolean;
}

export function LoginStateView({ auth }: LoginStateProps) {
	const [text, setText] = useState("");
	useEffect(() => {
		setText(
			auth ? "Estás autenticado"
				: "No estás autenticado. puedes autenticarte en la parte superior"
		)
	}, [auth])
	return <section>
		<p className={styles.text}>{text}</p>
	</section>
}
