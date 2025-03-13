import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./PostsComponent"; // Ensure this file exists

// Initialize React Query Client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
