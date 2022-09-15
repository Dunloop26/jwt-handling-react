import { Log, LogProps } from '@components/Log'
import styles from './LogGroup.module.css'

export function LogGroup() {

	const logs: LogProps[] = [
		{ time: new Date(Date.now()), message: "El usuario se ha registrado" },
		{ time: new Date(Date.now()), message: "El usuario se ha registrado" },
		{ time: new Date(Date.now()), message: "El usuario se ha registrado" },
		{ time: new Date(Date.now()), message: "El usuario se ha registrado" },
	]

	return <section className={styles.container}>
		{logs.map((value, index) => {
			const { message, time } = value;
			return <Log key={index} message={message} time={time} />
		})}
	</section>
}
