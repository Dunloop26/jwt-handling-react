import { Login } from '@layouts/Login'
import { Logout } from '@layouts/Logout'
import { TokenView } from '@layouts/TokenView'

export function Main() {
	return (
		<section>
			<Login />
			<Logout />
			<TokenView />
		</section>
	)
}
