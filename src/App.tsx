import Button from './components/Button/Button'

const App = () => {
  return (
    <div>
      <h2>Component Library</h2>
      <Button content="Click Me" onClick={() => console.log('Button clicked!')} size="sm" variant="danger" />
    </div>
  )
}

export default App
