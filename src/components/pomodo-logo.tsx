import { Alarm as AlarmIcon } from "@phosphor-icons/react";

export function PomodoLogo() {
	return (
		<div className="flex items-center	gap-[1px]">
			<h1 className="font-nunito-sans text-2xl font-bold text-white">pomod</h1>
			<AlarmIcon className="w-6 h-6 text-white" />
		</div>
	);
}
