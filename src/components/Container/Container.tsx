type ContainerProps = {
    children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="m-auto p-10 flex gap-10 items-center justify-center flex-wrap">
            {children}
        </div>
    );
};

export default Container;
