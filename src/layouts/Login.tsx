import { Button, Input } from '@components'
import styles from './Login.module.css'
import commonStyles from './common.module.css'

export function Login() {
	const containerClasses = [
		"box-container",
		commonStyles.container,
		styles.loginContainer
	]
	return (<section className={containerClasses.join(" ")}>
		<section className={styles.inputGroup}>
			<Input label="Usuario" />
			<Input label="Contraseña" />
		</section>
		<Button label="Iniciar sesión" />
	</section>)
}
