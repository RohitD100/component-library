import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
      <div className="h-64 flex">
          <Sidebar
              logo="MyApp"
              activeHref="/dashboard"
              items={[
                  { label: "Dashboard", href: "/dashboard", badge: "3" },
                  { label: "Users", href: "/users" },
                  { label: "Settings", href: "/settings" },
                  { label: "Analytics", href: "/analytics" },
              ]}
          />
      </div>
  );
}

export default App
