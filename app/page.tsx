import Navbar from "@/app/components/Navbar";
import HomePage from "./(home)/HomePage";
import Footer from "./(home)/Footer";
import Indices from "./components/Indices";


export default function Home() {

  const symbols = ['AAPL', 'IXIC', 'DJI'];

  return (
    <main>
      <HomePage />
      <Footer />
      
    
      

    </main>
  );
}
