import mlbbHeroData from "./data.jsx";  
import MLCard from "./MLCard.jsx";

function App() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5 text-uppercase">Mobile Legends Heroes</h2>
      
      <div className="row"> 
        {mlbbHeroData.map((hero) => (
          <MLCard key={hero.id} data={hero} />
        ))}
      </div>
    </div>
  );
}

export default App;