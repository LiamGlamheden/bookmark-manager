import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Home/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
