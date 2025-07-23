import { useState } from 'react'
import './App.css'
import Button from './components/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button
          label="Save Changes"
          variant="primary"
          onClick={() => alert('Button clicked!')}
          type="submit"
          data-testid="save-button"
        />

      </div>

    </>
  )
}

export default App
