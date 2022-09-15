import { useState } from "react"
import styles from './TokenView.module.css'

export function TokenView() {
	const [token, setToken] = useState("bcdef")
	const containerClasses = [
		"box-container",
		styles.container,
	]
	return <section className={containerClasses.join(" ")}>
		<p className={styles.tokenCode}>{token}</p>
		<p className={styles.text}>Este es el token almacenado en el <strong>Local Storage</strong> del front</p>
	</section>
}
