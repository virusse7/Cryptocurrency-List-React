import Header from "./components/Header"
import SearchInput from "./components/SearchInput"
import AppWrapper from "./components/AppWrapper"
import CryptocurrencyTile from "./components/CryptocurrencyTile"
import data from './data.json';

function App() {

  return (
    <AppWrapper>
      <main className="">
        <Header />
        <div className="p-3">
          <SearchInput />
          {data.map((crypto, index) => (
            <CryptocurrencyTile
              key={index}
              amount={crypto.amount}
              icon={crypto.icon}
              name={crypto.name}
              percentChange={crypto.percentChange}
              ticker={crypto.ticker}
            />
          ))}
        </div>
      </main>
    </AppWrapper>
  )
}

export default App
