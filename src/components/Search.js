import React, {useState} from "react";
import './Search.css';
import data from "../TempData.json";
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="templateContainer">
        <h2 className="asset">Asset Search</h2>
    <div className="searchInput_Container">
      <input className="search" id="searchInput" type="text" placeholder="Search Asset..." onChange={(event) => {
        setSearchTerm(event.target.value);
      }} />
      <div className="searchIcon">
      <SearchIcon style={{width:'2em', margin:'7px', height: '1.5em'} } />
      </div>
      
        </div>
            <h2 className="asset_result">Search Results</h2> 
            <hr />  
        <div>
    </div>
    
    <div className="template_Container">
      {
        data 
          .filter((val) => {
            if(searchTerm === ""){
              return val;
            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          })
          .map((val) => {
            return(
              <div className="template" key={val.id}>
                  <h3 className="value">{val.title}</h3>
                  <video className="setup" width="220" height="140">
                    <source src={val.video} type="video/mp4" />
                  </video>
              </div> 
            )
          })
      }
    </div>
  </div>
  )
}

export default Search