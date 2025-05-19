"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  // TODO: Style Error
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", textAlign: "center", maxWidth: "400px", width: "100%" }}>
        <h2 style={{ marginBottom: "16px", color: "#333" }}>Something went wrong!</h2>
        <p style={{ marginBottom: "20px", color: "#666" }}>We encountered an error. Please try again.</p>
        <button
          onClick={() => reset()}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
