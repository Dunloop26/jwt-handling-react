import styles from './Log.module.css'

export interface LogProps {
	message: string,
	time: Date,
}

export function Log({ message = "", time = new Date(Date.now()) }: LogProps) {
	return <section className={styles.container}>
		<p className={styles.date}>{time.toLocaleString(navigator.language)}</p>
		<p className={styles.message}>{message}</p>
	</section>
}
