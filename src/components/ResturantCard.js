import { CDN_URL } from '../utils/constents.js';

const ResturantCard = (props) =>{ 

    const { resData } = props;

    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo} = resData.info;

    return(
        <div className="res-card">
            <img alt="" src={CDN_URL + cloudinaryImageId}/>
            <div className="res-content">
                <h3>{name}</h3>
                <p>{avgRating} star</p>
                <div className="sw-restaurant-card-descriptions-container d-flex justify-content-between flex-column">
                    <div className="cuisine">{cuisines.join(', ')}</div>
                    <div className="card-price">{costForTwo}</div>
                </div>
            </div>
        </div>
    );
};

export default ResturantCard;