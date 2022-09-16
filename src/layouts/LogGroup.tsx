import { Log, LogProps } from '@components/Log'
import { LogContext } from '@contexts/LogContext'
import { useContext } from 'react'
import styles from './LogGroup.module.css'

export function LogGroup() {
	const { get } = useContext(LogContext)
	return <section className={styles.container}>
		<h1 className={styles.title}>Registro de Logs</h1>
		<section className={styles.scrollLog}>
			{get().map((value: LogProps, index: number) => {
				const { message, time } = value;
				return <Log key={index} message={message} time={time} />
			})}
		</section>
	</section>
}
