import Header from "./components/Header";

import AppWrapper from "./components/AppWrapper";
import CryptocurrencyList from "./components/CryptocurrencyList";
function App() {

  return (
    <>
    <AppWrapper>
      <main className="flex flex-col">
        <Header />
        <div className="p-3">
          <CryptocurrencyList />
        </div>
      </main>
    </AppWrapper>
    <input className="mx-auto mt-4 items-center flex"></input>
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