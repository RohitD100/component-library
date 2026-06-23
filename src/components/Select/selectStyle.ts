export const selectStyles = {
container: {
position: "relative" as const,
width: "280px",
},

control: {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "12px 16px",
border: "1px solid #d1d5db",
borderRadius: "10px",
background: "#fff",
cursor: "pointer",
transition: "0.2s ease",
},

dropdown: {
position: "absolute" as const,
top: "110%",
left: 0,
width: "100%",
background: "#fff",
borderRadius: "10px",
boxShadow: "0 8px 20px rgba(0,0,0,.12)",
overflow: "hidden",
zIndex: 100,
},

groupLabel: {
padding: "10px 16px",
background: "#f3f4f6",
fontWeight: 600,
color: "#6b7280",
},

option: {
padding: "12px 16px",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
cursor: "pointer",
transition: "0.2s ease",
},

selectedOption: {
backgroundColor: "#2563eb",
color: "#fff",
},

hoverOption: {
backgroundColor: "#eff6ff",
color: "#2563eb",
},

disabledOption: {
opacity: 0.5,
cursor: "not-allowed",
},

clearButton: {
width: "100%",
padding: "10px",
border: "none",
cursor: "pointer",
background: "#f3f4f6",
},
};
