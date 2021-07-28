import React from "react";
import truck from "../../assets/icons/truck-icon.svg"
import correct from "../../assets/icons/correct.svg"
import road from "../../assets/icons/road.svg"
import './icons.css'

const Icons = () => {

    return (
        <div id="icons" className="icons">
            <div className="icons-row">
                <div className="icon-col">
                    <div className="icon-col-img">
                        <img src={truck} alt="icon"  />
                    </div>
                    <h3>We ensures you the best quality services</h3>
                    <p>Friendly staff and great vehicles will ensure you maximum quality</p>
                </div>
                <div className="icon-col">
                <div className="icon-col-img">
                    <img src={road} alt="icon" id="road" />
                </div>
                    <h3>Safe and on time delivery of your goods</h3>
                    <p>From big to small, we do it all, from warehouse to your client</p>
                </div>
                <div className="icon-col">
                    <div className="icon-col-img">
                        <img src={correct} alt="icon" id="goods" />
                    </div>
                    <h3>Very careful handling of valuable goods</h3>
                    <p>Your cargo is our concern</p>
                </div>
            </div>
        </div>
    )
};

export default Icons;
