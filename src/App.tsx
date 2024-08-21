import Header from "./components/Header";
import AppWrapper from "./components/AppWrapper";
import CryptocurrencyList from "./components/CryptocurrencyList";
import { useState } from "react";

function App() {
  const [recordCount, setRecordCount] = useState(1000);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= 1 && value <= 10000) {
      setRecordCount(Number(value));
    }
  }

  return (
    <>
      <AppWrapper>
        <main className="flex flex-col">
          <Header />
          <div className="p-3">
            <CryptocurrencyList recordCount={recordCount} />
          </div>
        </main>
      </AppWrapper>
      <input
        type="number"
        onChange={handleInputChange}
        value={recordCount}
        min="1"
        className="mx-auto mt-4 items-center flex px-2 py-1 bg-[#171C2F] text-white rounded"
      />
    </>
  );
}

export default App;