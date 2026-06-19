import Card from './components/Card/Card'

const App = () => {
  return (
      <div className="flex flex-wrap gap-4">
          <Card
              title="Getting Started"
              description="Learn how to build production-ready components with React and Tailwind CSS."
              imageUrl="https://picsum.photos/400/200?random=1"
              badge="New"
              badgeVariant="success"
              actionLabel="Read More"
              secondaryLabel="Save"
              onAction={() => console.log("action")}
              onSecondary={() => console.log("secondary")}
              size="md"
          />
          <Card
              title="Advanced Patterns"
              description="Explore advanced React patterns used in large-scale applications."
              badge="Popular"
              badgeVariant="warning"
              actionLabel="Explore"
              size="md"
          />
          <Card
              title="Component Library"
              description="A complete guide to building a reusable component library."
              badge="Hot"
              badgeVariant="danger"
              actionLabel="View"
              size="sm"
          />
      </div>
  );
}

export default App
