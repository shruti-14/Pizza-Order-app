import React from 'react';
import './pizza.css';
import * as toppingsCount from './toppingsCount';

const pizza = (props) => {
    const toppingsObjList = [
        {
            type: "pepperoni",
            count: toppingsCount.PEPPERONI_COUNT
        },
        {
            type: "capsicum",
            count: toppingsCount.CAPSICUM_COUNT
        },
        {
            type: "chicken",
            count: toppingsCount.CHICKEN_COUNT
        },
        {
            type: "olives",
            count: toppingsCount.OLIVES_COUNT
        }
    ];


    return (
        <div className="Pizza">
                <div className="teig"></div>
    
 
    <div className="salamiLayer">       
        <div  className="salami salami1"></div>
		<div  className="salami salami2"></div>
        <div  className="salami salami3"></div>
        <div  className="salami salami4"></div>
        <div  className="salami salami5"></div>
        <div  className="salami salami6"></div>
    </div>    
    <div className="chickenLayer">
        <div className="chicken chicken1"></div>
        <div className="chicken chicken2"></div>
        <div className="chicken chicken3"></div>
        <div className="chicken chicken4"></div>
        <div className="chicken chicken5"></div>
        <div className="chicken chicken6"></div>
    </div>
    
     
    <div className="olivenLayer">
        <div className="oliven oliven1"></div>        
        <div className="oliven oliven2"></div>        
        <div className="oliven oliven3"></div>
        <div className="oliven oliven4"></div>        
        <div className="oliven oliven5"></div>        
        <div className="oliven oliven6"></div>
        <div className="oliven oliven7"></div>        
        <div className="oliven oliven8"></div>
        <div className="oliven oliven9"></div>
        
    </div>
     <div className="capsicumLayer">
     	<div className="capsicum capsicum1"></div>
        <div className="capsicum capsicum2"></div>
        <div className="capsicum capsicum3"></div>
         <div className="capsicum capsicum4"></div>
         <div className="capsicum capsicum5"></div>
         <div className="capsicum capsicum6"></div>
        <div className="capsicum capsicum7"></div>        
     </div>

        </div>
    );
}

export default pizza;