import { useAppDispatch } from "@/redux/store";
import { pomodoroActions } from "@/redux/modules/pomodoro";

export function usePomodoro() {
	const dispatch = useAppDispatch();

	function handleStartTime() {
		dispatch(pomodoroActions.start());
	}

	function handleStopTime() {
		dispatch(pomodoroActions.stop());
	}

	return {
		handleStartTime,
		handleStopTime,
	};
}
