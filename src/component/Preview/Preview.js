import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./preview.css";

const Preview = (props) => {
    const {deleteItem,product} = props
    const { img, name, price, quantity} = product;
  return (
    <div className="preview">
      <div className="preview-left">
        <div className="preview-img">
          <img src={img} alt="" />
        </div>
        <div className="preview-item">
          <div className="preview-text">
            <p title={name}>{name.length > 20 ?name.slice(0,20) + '...' : name}</p>
            <p>
              price :<span>{price}</span>
            </p>
            <p>
              Quantity:<small>{quantity}</small>
            </p>
          </div>
          <div className="btn">
            <FontAwesomeIcon onClick={()=> deleteItem(product)}  className="delete-icon"  icon={faTrash}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Preview;
