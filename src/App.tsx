import Header from "./components/Header";

import AppWrapper from "./components/AppWrapper";
import CryptocurrencyList from "./components/CryptocurrencyList";
function App() {

  return (
    <AppWrapper>
      <main className="flex flex-col">
        <Header />
        <div className="p-3">
          <CryptocurrencyList />
        </div>
      </main>
    </AppWrapper>
  );
}

export default App;
