import Avatar from "./components/Avatar/Avatar";

const App = () => {
    return (
        <div className="flex flex-wrap gap-4 items-end justify-center mt-50">
            <Avatar
                src="https://i.pravatar.cc/150"
                alt="User"
                size="md"
                status="online"
                shape="circle"
            />

            <Avatar initials="AG" size="sm" shape="circle" status="busy" />
            <Avatar initials="JD" size="md" shape="circle" status="offline"/>
            

            <Avatar size="md" shape="circle" />
        </div>
    );
};

export default App;
