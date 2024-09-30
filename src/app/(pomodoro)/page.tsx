"use client";

import { usePomodoro } from "@/hooks/use-pomodoro";
import { useResponsive } from "@/hooks/use-responsive";
import { formatTimerSecondToMinutes } from "@/helpers/format-timer";
import { PlayerControls } from "@/components/player-controls";
import { AdsterraAd } from "@/components/ads-terra-ad";
import { PomodoroActionButtons } from "./_components/pomodoro-action-buttons";
import { PomodoroCounter } from "./_components/pomodoro-counter";

export default function PomodoroPage() {
	const { timer, handlePauseTime, handleStartTime, handleStopTime, handleSkipBreak } =
		usePomodoro();

	const { isDesktop } = useResponsive({ shouldListen: false });

	return (
		<>
			<main className="flex flex-col items-center justify-center h-screen relative">
				<PlayerControls/>
				<strong className="text-[120px] sm:text-[160px] md:text-[200px] text-white font-nunito-sans font-bold">
					{formatTimerSecondToMinutes(timer)} 
				</strong>
				<PomodoroActionButtons
					startTimer={handleStartTime}
					stopTimer={handleStopTime}
					pauseTimer={handlePauseTime}
					skipBreak={handleSkipBreak}
				/>
				<PomodoroCounter />
				<div className="w-[350px] md:w-full overflow-hidden flex items-center justify-center">
					{isDesktop ? (
						<AdsterraAd id="9706afb76b1e9f15e69ae4640e529b10" width={728} height={90} className="mt-20" />
					) : (
						<AdsterraAd id="4e778751366749d56339a9fc28a62fee" width={320} height={50} className="mt-10" />
					)}
				</div>
			</main>
			<section className="flex flex-col max-w-4xl mx-auto text-gray-100 bg-zinc-700/40 p-8 rounded-md backdrop-blur-sm border border-zinc-600/60">
				<h2 className="text-3xl font-bold mb-6 text-white">O que é a Técnica Pomodoro?</h2>
				<p className="mb-6">
					A técnica Pomodoro é uma estratégia simples e eficaz de gestão de tempo, criada para melhorar o foco e a produtividade. Ela funciona dividindo seu trabalho em blocos de 25 minutos, chamados de Pomodoros, seguidos por uma breve pausa. Após quatro ciclos, uma pausa maior é recomendada para descanso.
				</p>

				<h3 className="text-2xl font-semibold mb-4 text-white">Como Funciona o Pomodo?</h3>
				<p className="mb-6">
					No Pomodo, você pode ativar o cronômetro de 25 minutos para iniciar seu ciclo de produtividade, enquanto escuta música Lo-Fi relaxante, projetada para ajudar na concentração. Durante esse tempo, mantenha o foco total nas suas tarefas. Ao final do tempo, o Pomodo sinaliza que é hora de fazer uma pausa curta para renovar as energias.
				</p>
				<p className="mb-6">
					Ao clicar no botão de expansão, você também pode escolher ativar o player de vídeo, onde terá acesso a vídeos com sons relaxantes que combinam perfeitamente com a técnica Pomodoro, ajudando você a se manter imerso na tarefa.
				</p>

				<h3 className="text-2xl font-semibold mb-4 text-white">Benefícios da Técnica Pomodoro</h3>
				<ul className="list-disc pl-6 mb-6">
					<li>Maior foco e concentração: A técnica ajuda a eliminar distrações e manter sua atenção na tarefa atual.</li>
					<li>Redução de fadiga mental: As pausas regulares ajudam a evitar o cansaço acumulado, permitindo que você trabalhe por períodos mais longos com mais eficiência.</li>
					<li>Melhora na organização: Dividir o trabalho em blocos temporais torna mais fácil planejar e acompanhar seu progresso ao longo do dia.</li>
				</ul>

				<h3 className="text-2xl font-semibold mb-4 text-white">Experimente o Pomodo!</h3>
				<p>
					Use nosso contador para começar a melhorar sua produtividade agora mesmo. Organize seu trabalho, faça pausas estratégicas e maximize seus resultados com a ajuda da técnica Pomodoro.
				</p>
			</section>
		</>
	);
}
