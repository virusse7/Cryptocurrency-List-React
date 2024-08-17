import Header from "./components/Header"
import SearchInput from "./components/SearchInput"
import AppWrapper from "./components/AppWrapper"
import CryptocurrencyTile from "./components/CryptocurrencyTile"

function App() {

  return (
    <AppWrapper>
      <main className="">
        <Header />
        <div className="p-3">
          <SearchInput />
          <CryptocurrencyTile percentage={2} />
        </div>
      </main>
    </AppWrapper>
  )
}

export default App
