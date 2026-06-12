import Footer from './components/Footer/Footer'

const App = () => {
  return (
      <div>
          <Footer
              size="md"
              theme="dark"
              links={[{ label: "Privacy", url: "/privacy" }]}
              logoUrl="/logo.png"
              disclaimer="© 2026 MyApp"
          />
      </div>
  );
}

export default App
