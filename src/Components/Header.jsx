import { Link } from "react-router-dom";
import './Header.css' 
  
const Header = ()=>{ 
return (
  <>
    <div className="header">
      <div className="header-left">
        <Link to="/" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/></Link>
        <Link to="/movies/popular" className="link">Popular</Link>
        <Link to="/movies/top_rated"className="link">TopRated</Link>
        <Link to="/movies/upcoming"className="link">UpComing</Link>
      </div>
    </div>
  </>
)


}

export default Header;