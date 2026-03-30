import { useState } from 'react'
import { getCellClasses, shuffle, formatTime, playSound } from '@/utils/content.utils'
import { Button, Modal, useDisclosure } from '@heroui/react'
import Confetti from 'react-confetti'
import SchulteModal from './SchulteModal'

export default function SchulteTable() {
	const gridSize = 5
	const limitNumber = 25
	const [cells, setCells] = useState(() => {
		const arr = Array.from({ length: gridSize * gridSize }, (_, i) => i + 1)
		return shuffle(arr)
	})

	const [currentNumber, setCurrentNumber] = useState<number>(1)
	const [isFinished, setIsFinished] = useState(false)

	// Timer state
	const [startTime, setStartTime] = useState<number | null>(null)
	const [endTime, setEndTime] = useState<number | null>(null)

	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const handleRestart = () => {
		// reset number
		setCurrentNumber(1)
		setIsFinished(false)
		setStartTime(null)
		setEndTime(null)

		// shuffle new grid
		const arr = Array.from({ length: gridSize * gridSize }, (_, i) => i + 1)
		setCells(shuffle(arr))
	}

	return (
		<div className="flex flex-col items-center justify-around flex-1 gap-2 p-4 box-border overflow-hidden">
			{isFinished && (
				<Confetti
					className="absolute inset-0 overflow-hidden"
					width={window.innerWidth}
					height={window.innerHeight}
				/>
			)}
			<div className="w-full max-w-[70vmin] flex flex-col items-center justify-center">
				<span className="text-[clamp(1.5rem,1.5vw,1.875rem)] uppercase">Current number:</span>
				<span className="text-[clamp(2.5rem,3.5vw,3.5rem)] font-bold">{currentNumber}</span>
			</div>
			<div className="w-full h-full max-w-[69vmin] max-h-[69vmin] border-4 border-[#fafafa] bg-[#fafafa] rounded-[1.8rem] grid grid-cols-5 grid-rows-5 gap-1 overflow-hidden">
				{cells.map((num, i) => (
					<div
						key={num}
						className={`flex justify-center items-center cursor-pointer select-none active:scale-[0.92] transition-all duration-200
								  hover:border-[#222] border-[#fafafa] hover:bg-[#222] bg-[#3a3a3a] text-[#fafafa] font-bold text-[clamp(2.2rem,2.5vw,3rem)] 
								  ${getCellClasses(i, gridSize)}`}
						onClick={() => {
							if (!startTime) {
								// First click = start timer
								setStartTime(Date.now())
							}

							if (num === limitNumber && currentNumber === limitNumber) {
								playSound('correct')
								setIsFinished(true)
								setEndTime(Date.now())
								onOpen()
							} else if (num === currentNumber) {
								playSound('correct')
								setCurrentNumber(currentNumber + 1)
							} else {
								playSound('error')
							}
						}}
					>
						{num}
					</div>
				))}
			</div>
			<Button variant="light" size="lg" radius="lg" className="text-[#fafafa] font-bold" onPress={handleRestart}>
				Restart
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<SchulteModal
					onRestart={handleRestart}
					finalTime={endTime && startTime ? formatTime(endTime - startTime) : null}
				/>
			</Modal>
		</div>
	)
}
