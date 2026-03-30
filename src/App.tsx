import './App.css'
import AppContent from '@/components/layout/content/AppContent'
import AppNavbar from '@/components/layout/navbar/AppNavbar'

function App() {
	return (
		<div className="flex flex-col w-full h-screen overflow-hidden">
			<AppNavbar />
			<AppContent />
		</div>
	)
}

export default App
