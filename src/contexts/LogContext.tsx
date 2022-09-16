import { LogProps } from "@components/Log";
import { createContext, useState } from "react";

export interface LogContextProviderProps {
	children: React.ReactElement[] | React.ReactElement
}
export interface LogContextValueType {
	add: (log: LogProps) => void,
	get: () => LogProps[],
	clear: () => void,
}
export const LogContext = createContext<LogContextValueType>({
	add: (_log: LogProps) => { },
	get: () => [],
	clear: () => { }
})

export function LogContextProvider({ children }: LogContextProviderProps) {
	const [logGroup, setLogGroup] = useState<LogProps[]>([])
	function addLog(log: LogProps) {
		setLogGroup((newVal: LogProps[]) => {
			return [...newVal, log]
		});
	}
	function clearLog() {
		setLogGroup([]);
	}
	function getLogs() {
		return logGroup
	}
	const value: LogContextValueType = {
		add: addLog,
		clear: clearLog,
		get: getLogs
	}
	return <LogContext.Provider value={value}>
		{children}
	</LogContext.Provider>
}
