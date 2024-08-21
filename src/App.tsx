import Header from "./components/Header";

import AppWrapper from "./components/AppWrapper";
import CryptocurrencyList from "./components/CryptocurrencyList";
import { useState } from "react";
function App() {
  const [recordCount, setRecordCount] = useState(20);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)  => {
    const value = event.target.value;
    if (!isNaN(Number(value)) && Number(value) > 0) {
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
      max="10_000"
      className="mx-auto mt-4 items-center flex px-2 py-1 bg-[#171C2F] text-white rounded"
    />
    </>
  );
}

export default App;

{/* todo
listitem hover effect 
small icons generating
generate 10k records with smooth rendering
add input to change numbers of generated records
*/}