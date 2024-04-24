import { useAppSelector } from "@/redux";

export function PomodoroCounter() {
	const takeBreakCount = useAppSelector((ctx) => ctx.pomodoro.takeBreakCount);
	const pomodoroCount = useAppSelector((ctx) => ctx.pomodoro.pomodoroCount);

	function makePomodoCompletedMessage() {
		if (pomodoroCount === 1) {
			return `Você já concluiu 1 pomodoro`;
		}

		return `Você já concluiu ${pomodoroCount} pomodoros`;
	}

	function makeLeftUntilToLongBreakMessage() {
		if (takeBreakCount === 4) {
			return `Falta 1 pausa para a pausa longa`;
		}

		return `Faltam ${4 - takeBreakCount} pausas para a pausa longa`;
	}

	return (
		<div className="flex items-center gap-3 mt-6">
			<span className="bg-zinc-700 p-2 rounded text-gray-300 text-sm">
				{makePomodoCompletedMessage()}
			</span>
			<span className="bg-zinc-700 p-2 rounded text-gray-300 text-sm">
				{makeLeftUntilToLongBreakMessage()}
			</span>
		</div>
	);
}
