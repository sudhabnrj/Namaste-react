import ResturantCard from './ResturantCard.js';
//import resList from '../utils/mockData.js';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer.js';
// import Search from './Search.js';


const BodyContainer = () =>{

   const [resturantList, setResturantList] = useState([]);

   const [filteredResturant, setFilteredResturant] = useState([]);

   const [searchText, setSearchText] = useState('');

    const handleFilter = () => {
        const featureList = resturantList.filter((res)=> res.info.avgRating > 4.5);
        setResturantList(featureList);
        //console.log(featureList);
    };

    useEffect(()=> { 
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    
            const json = await data.json();
    
            console.log(json);
            setResturantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch(err){
            console.log(err);
        }
    };

    if(resturantList.length === 0){
        return(
            <Shimmer/>
        )
    }

    const handleSearch = () => {
        const filteredResult = resturantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

        console.log(filteredResult);
        setFilteredResturant(filteredResult);
    }

    const onChangeHandler = (e) => {
        setSearchText(e.target.value);
        
    }


    return(
        <div className="body-container">
            <div className="container">
                <div className="filter-header d-flex justify-content-between">
                    <div className="search-filter">
                        <div className="search-container">
                            <input type="text" className="input-search" name="search" value={searchText} onChange={(e)=> {onChangeHandler(e)} } />
                            <button type="button" className="search-btn" onClick={()=> {handleSearch()}}>Search</button>
                        </div>
                    </div>
                    <div className="filter-container">Filter: 
                        <button className="filter-btn" type="button" onClick={()=> handleFilter()}>
                            Top Resturants
                        </button>
                    </div>
                </div>
                <div className="">
                    <h2 className="title h2-title">Top restaurant chains in Kolkata</h2>
                    <div className="res-container">                        
                        {
                          filteredResturant.map(resturants => (
                            <ResturantCard key={resturants.info.id} resData={resturants} />
                          ))  
                        }                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyContainer;