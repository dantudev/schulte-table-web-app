import { ModalHeader, ModalBody, ModalFooter, Button, Divider } from '@heroui/react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6'
import { TbMailFilled } from 'react-icons/tb'
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from '@/global.constants'
import packageJson from '../../../../package.json'

/**
 * AboutModal
 * - Presentational component for "About this project".
 * - Contains information about the project and links to socials.
 */
export default function AboutModal() {
	return (
		<>
			<ModalHeader className="flex flex-col gap-1">About this project</ModalHeader>
			<ModalBody className="flex items-center justify-center pb-2">
				{/* What is a Schulte Table */}
				<div>
					<h3 className="text-[1.1rem] font-semibold pb-1">What is a Schulte Table?</h3>
					<p className="text-justify text-[0.9rem]">
						A Schulte Table is a grid filled with randomly arranged numbers, letters, or symbols, that is
						used as a visual training tool. The goal is to find the elements in a specific order as quickly
						as possible. Originally developed for psychology and pedagogy, it is widely used to improve
						peripheral vision, concentration, speed of visual perception, and reading skills.
					</p>
				</div>
				<Divider className="my-2 w-3/5" />
				{/* Socials and project author info */}
				<div className="text-center space-y-2">
					<p>
						This project was made by <span className="font-bold">David Antúnez Pérez</span>
					</p>
					<p>Please, support it by dropping a star on the repository and following me on socials.</p>
					<p className="text-sm opacity-50">Version {packageJson.version}</p>
				</div>
			</ModalBody>

			<ModalFooter className="flex justify-around items-center">
				<Button
					as="a"
					href={EMAIL_URL}
					isIconOnly
					size="md"
					color="default"
					aria-label="Mail"
					target="_blank"
					rel="noreferrer"
				>
					<TbMailFilled size={20} />
				</Button>

				<Button
					as="a"
					href={LINKEDIN_URL}
					isIconOnly
					size="md"
					color="primary"
					aria-label="LinkedIn"
					target="_blank"
					rel="noreferrer"
				>
					<FaLinkedinIn size={20} />
				</Button>

				<Button
					as="a"
					href={GITHUB_URL}
					isIconOnly
					size="md"
					color="default"
					variant="ghost"
					aria-label="Github"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub size={20} />
				</Button>
			</ModalFooter>
		</>
	)
}
