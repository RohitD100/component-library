import Button from './components/Button/Button'
import Card from './components/Card/Card'

const App = () => {
  return (
      <div className='text-center'>
          <h1 className="text-3xl font-bold underline text-center mt-10">
              Component Library
          </h1>
          <Card
              children={
                  <div className="flex flex-col items-center justify-center h-full">
                      <h2 className="text-xl font-semibold mb-4">
                          This is a Card component
                      </h2>
                      <p className="text-gray-600">
                          You can put any content inside this card.
                      </p>
                  </div>
              }
              className="mt-10"
              height={180}
              width={180}
          />

          <Button
              children="Save me"
              variant="dark"
              size="md"
              loading={false}
              className="rounded mt-10"
          />
      </div>
  );
}

export default App
