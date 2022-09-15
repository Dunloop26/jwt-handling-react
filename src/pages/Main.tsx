import { Stack } from '@layouts/Stack'
import { LogGroup } from '@layouts/LogGroup'
import { Login } from '@layouts/Login'
import { Logout } from '@layouts/Logout'
import { TokenView } from '@layouts/TokenView'
import styles from './Main.module.css'
import { LogContextProvider } from '@contexts/LogContext'

export function Main() {
	return (
		<section className={styles.mainPageContainer}>
			<LogContextProvider children={
				<Stack elements={[
					<Stack key="vstack" elements={[
						<Login key="login" />,
						<Logout key="logout" />,
						<TokenView key="tokenview" />
					]} orientation="vertical" />,
					<LogGroup key="loggroup" />,
				]} orientation="horizontal" />
			} />
		</section>
	)
}
