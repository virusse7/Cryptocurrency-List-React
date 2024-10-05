import Header from "./components/Header";
import AppWrapper from "./components/AppWrapper";
import CryptocurrencyList from "./components/CryptocurrencyList";
import { useState } from "react";

function App() {
    const [recordCount, setRecordCount] = useState(10000);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (value >= 1 && value <= 10000) {
            setRecordCount(Number(value));
        }
    }

    return (
        <AppWrapper>
            <main className="flex flex-col">
                <Header />
                <div className="p-3">
                    <CryptocurrencyList recordCount={recordCount} />
                </div>
            </main>
            <div className="text-center">
                <p className="pb-2">Set number of records:</p>
                <input
                    className="mb-4 px-2 py-1 bg-[#171C2F] rounded-lg"
                    type="number"
                    onChange={handleInputChange}
                    value={recordCount}
                    min="1"
                />
            </div>
        </AppWrapper>
    );
}

export default App;