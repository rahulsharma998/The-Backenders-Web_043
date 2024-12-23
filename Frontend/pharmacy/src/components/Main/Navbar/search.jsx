import React,{useState} from 'react'
//import{useNavigate} from 'react-router-dom'
import searchLogo from '../../../assets/Images/icons/search.svg';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
    onSearch(searchTerm);
    };
    
      return (
        <div className="second-section">
          <input
            type="text"
            placeholder="Search"
            className="search-container"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            <img src={searchLogo} alt="Search" />
          </button>
        </div>
      );
}

export default Search