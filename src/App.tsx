import { components } from "./componentsList";
import "./index.css";
import { styles } from "./styles";

const App = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Component Library</h2>

            {components.map((comp, index) => (
                <div key={index} style={styles.componentsContainer}>
                    <h4 style={{ marginBottom: "10px" }}>{comp.name}</h4>
                    {comp.render()}
                </div>
            ))}
        </div>
    );
};

export default App;
