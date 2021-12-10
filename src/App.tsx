import React, { lazy, Suspense } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter as Router, Route } from "react-router-dom"

const Pokemon = lazy(() => import("./Pokemon"))
const PokemonDetails = lazy(() => import("./Pokemon/PokemonDetails"))

const queryClient = new QueryClient()

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Route component={Pokemon} path="/" exact />
          <Route component={PokemonDetails} path="/details/:name" />
        </QueryClientProvider>
      </Router>
    </Suspense>
  )
}

export default App
