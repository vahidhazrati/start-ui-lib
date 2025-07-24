import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Modal from './components/modal/Modal'
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <div className="top-container" style={{ width: '100%', padding: '20px', background: '#f5f5f5', textAlign: 'center' }}>
        <h1 style={{ color: '#333' }}>Welcome to the UI Library</h1>
        <p style={{ color: '#666' }}>This is a simple UI library built with React and Tailwind CSS.</p>
        <div className="grid min-h-screen w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center bg-gray-100 p-8">
          <div>
            <Button label="Save Changes1" variant="primary" onClick={() => alert('Button clicked!')} type="submit" data-testid="save-button" style={{ width: '100%', padding: '8px' }} />
          </div>
          <div>
            <Button label="Save Changes2" variant="secondary" onClick={() => alert('Button clicked!')} type="submit" data-testid="save-button" style={{ width: '100%', padding: '8px' }} />
          </div>
          <div className=" w-full h-32 flex items-center justify-center text-xl">
            <Button label="Open Modal" variant="outline" onClick={handleOpen} type="submit" data-testid="save-button" style={{ width: '100%', padding: '8px' }} />
          </div>
          <div className="w-full h-32 flex items-center justify-center bg-white text-gray-800 text-xl border">
         <Modal isOpen={isModalOpen} onClose={handleClose}/>

          </div>

        </div>
      </div>

    </>
  )
}

export default App
