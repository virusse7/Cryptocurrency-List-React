import Header from "./components/Header"
import SearchInput from "./components/SearchInput"
import AppWrapper from "./components/AppWrapper"

function App() {

  return (
    <AppWrapper>
      <main className="border-solid border-[#283044] border-2 rounded-xl">
        <Header/>
        <SearchInput/>
        <div className="text-3xl">test</div>
      </main>
    </AppWrapper>
  )
}

export default App
