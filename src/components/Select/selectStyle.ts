export const selectStyles = {
  container: {
    position: "relative" as const,
    width: "100%",
  },

  control: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
    border: "1px solid #C4B5FD",
    borderRadius: "12px",
    background: "#FFFFFF",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 8px rgba(139, 92, 246, 0.1)",
  },

  // Border hover effect
  controlHover: {
    border: "1px solid #8B5CF6",
    boxShadow: "0 4px 12px rgba(139, 92, 246, 0.15)",
  },

  // Border click/focus effect
  controlActive: {
    border: "2px solid #8B5CF6",
    boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.15)",
  },

  // Error state
  controlError: {
    border: "2px solid #EF4444",
    boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.15)",
  },

  // Success state
  controlSuccess: {
    border: "2px solid #22C55E",
    boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.15)",
  },

  dropdown: {
    position: "absolute" as const,
    top: "110%",
    left: 0,
    width: "100%",
    background: "#FFFFFF",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(139, 92, 246, 0.15)",
    overflow: "hidden",
    zIndex: 100,
  },

  groupLabel: {
    padding: "10px 16px",
    background: "#F5F3FF",
    fontWeight: 600,
    color: "#6D28D9",
  },

  option: {
    padding: "12px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
    borderLeft: "3px solid transparent",
  },

  selectedOption: {
    backgroundColor: "#8B5CF6",
    color: "#FFFFFF",
    fontWeight: 500,
    boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)",
  },

  hoverOption: {
    backgroundColor: "#F3E8FF",
    color: "#8B5CF6",
    borderLeft: "3px solid #8B5CF6",
    transform: "translateX(4px)",
  },

  activeOption: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    transform: "scale(0.98)",
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
    background: "#F5F3FF",
    color: "#8B5CF6",
    fontWeight: 500,
    transition: "all 0.2s ease",
  },
};
