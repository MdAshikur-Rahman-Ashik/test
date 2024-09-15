import "./../assets/Css/Banner.css";

import bg from "./../assets/Images/DD.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Banner = () => {
  return (
    <div>
      <header className="hero-banner">
        <img src={bg} alt="Banner Image" className="banner-img" />
        <div className="overlay">
          <div className="content">
            <h1>Find Your Next Place to Visit</h1>
            <p>Discover amazing places at exclusive deals</p>
            <div className="search-box">
              <form action="#">
                <div className="search-field">
                  <input type="text" placeholder="Keywords" />
                  <i className="fa fa-search"></i>
                </div>
                <div className="select-field">
                  <select>
                    <option value="">Destination</option>
                    <option value="1">Destination 1</option>
                    <option value="2">Destination 2</option>
                  </select>
                </div>
                <div className="select-field">
                  <select>
                    <option value="">Duration</option>
                    <option value="1">1-3 days</option>
                    <option value="2">3-7 days</option>
                  </select>
                </div>
                <button type="submit" className="search-btn">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Banner;
