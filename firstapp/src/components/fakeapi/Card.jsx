import React from "react";

const Card = (props) => {
  const { id, title, description, category, price, rating, stock, thumbnail } =
    props;
  return (
    <div className="card col-md-4">
      <img src={thumbnail} className="card-img-top" alt="not found" width={80} height={150} />
      <div className="card-body">
        <h5 className="card-title">Title: {title}</h5>
        <p className="card-text">
          Description: {description}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Category: {category}</li>
        <li className="list-group-item">Price: {price}</li>
        <li className="list-group-item">Rating: {rating}</li>
        <li className="list-group-item">Stock: {stock}</li>
      </ul>     
    </div>
  );
};

export default Card;
