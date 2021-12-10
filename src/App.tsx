import React, { lazy, Suspense } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter as Router, Route } from "react-router-dom"

const PokemonDetails = lazy(() => import("./Pokemon/PokemonDetails"))
const PokemonList = lazy(() => import("./Pokemon/PokemonList"))

const queryClient = new QueryClient()

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Route component={PokemonList} path="/" exact />
          <Route component={PokemonDetails} path="/details/:name" />
        </QueryClientProvider>
      </Router>
    </Suspense>
  )
}

export default App
