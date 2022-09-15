import { Button } from "@components";
import { LoginStateView } from "@components/LoginStateView";
import { useState } from "react";
import commonStyles from './common.module.css'
import styles from './Logout.module.css'

export function Logout() {
	const [auth, setAuth] = useState(false);
	const containerClasses = [
		"box-container",
		commonStyles.container,
		styles.container,
	]
	return <section className={containerClasses.join(" ")}>
		<LoginStateView auth={auth} />
		{(auth && <Button label="Cerrar sesión" />)}
	</section>
}
