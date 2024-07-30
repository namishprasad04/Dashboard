import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <>
      <div className="flex">
        {/* Side Navigation Bar */}
        <Navbar />
        {/* Main component on basis of selected navigation from nav bar */}
        <main className="grow">
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App;
