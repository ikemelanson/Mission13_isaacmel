// import joel from '../Joel.jpg';
import joel from './Joel.jpg';
// import logo from '../logo.svg';
function Home() {
  return (
    <>
      {/* home page */}
      <h1>Home</h1>
      <p>
        This is a website that keeps track of Joel Hilton's awesome movie
        collection. Check it out!
      </p>
      <img src={joel} alt="Joel Hilton" className="w-25"></img>
    </>
  );
}

export default Home;
