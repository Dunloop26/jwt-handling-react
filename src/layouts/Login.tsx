import { Button, Input } from '@components'
import styles from './Login.module.css'
import commonStyles from './common.module.css'
import { useContext } from 'react'
import { LogContext } from '@contexts/LogContext'

export function Login() {
	const containerClasses = [
		"box-container",
		commonStyles.container,
		styles.loginContainer
	]
	const logContext = useContext(LogContext)

	function onLoginClick() {
		logContext.add({time: new Date(Date.now()), message: "Intento de inicio de sesión" })
	}

	return (<section className={containerClasses.join(" ")}>
		<section className={styles.inputGroup}>
			<Input label="Usuario" />
			<Input label="Contraseña" />
		</section>
		<Button label="Iniciar sesión" onClick={onLoginClick} />
	</section>)
}
