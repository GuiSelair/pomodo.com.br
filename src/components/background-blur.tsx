export function BackgroundBlur() {
	return (
		<div
			className="
				absolute 
				top-0 
				left-0 
				w-full 
				h-full 
				pointer-events-none
				blur-[90px] 
			"
		>
			<svg
				className="absolute bottom-0 left-0 animate-pulse"
				width="484"
				height="472"
				viewBox="0 0 484 472"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				fillOpacity={0.3}
			>
				<path
					d="M27.0999 584.678C-35.5299 563.755 -61.9517 430.039 -67.3339 365.796L-114.308 299.154C-117.674 238.861 -100.553 102.69 -5.14706 40.3511C90.259 -21.9877 151.136 3.343 169.648 23.8007L294.84 221.003C311.674 241.62 368.724 305.355 462.243 395.357C555.763 485.358 313.929 564.867 181.323 593.372C156.011 599.192 89.7297 605.602 27.0999 584.678Z"
					fill="#B892FF"
				/>
			</svg>

			<svg
				className="absolute top-0 left-[50%] right-0 transform -translate-x-1/2 animate-pulse"
				width="479"
				height="255"
				viewBox="0 0 479 255"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				fillOpacity={0.3}
			>
				<path
					d="M463.72 149.925C445.249 199.22 337.957 216.424 286.62 218.863L232.175 254.371C184.043 255.317 76.0481 237.76 29.1275 159.957C-17.7931 82.1538 4.13902 34.3822 20.9702 20.2217L181.682 -73.8453C198.592 -86.6643 251.011 -130.282 325.406 -202.2C399.8 -274.118 456.188 -79.1617 475.083 27.3059C478.991 47.6392 482.191 100.63 463.72 149.925Z"
					fill="#FFC2E2"
				/>
			</svg>

			<svg
				className="absolute bottom-0 right-0 animate-pulse"
				width="287"
				height="402"
				viewBox="0 0 287 402"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				fillOpacity={0.3}
			>
				<path
					d="M371.88 132.599C403.08 174.999 358.88 274.265 332.88 318.599V383.599C307.38 424.432 233.68 505.299 142.88 502.099C52.0796 498.899 24.0462 454.432 21.3796 432.599L30.3796 246.599C28.8796 225.432 20.9796 157.699 1.37956 56.0986C-18.2204 -45.5014 175.88 13.7653 275.38 56.0986C294.546 63.9319 340.68 90.1986 371.88 132.599Z"
					fill="#EF7A85"
				/>
			</svg>
		</div>
	);
}
