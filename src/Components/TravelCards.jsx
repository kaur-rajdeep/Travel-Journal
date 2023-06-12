import React from "react";

function Card(props){
    return(
        <div className="flex justify-center">
        <div className="grid justify-center grid-col-1 md:grid-cols-2 w-11/12 lg:w-1/2 m-8 border-2 border-slate-500 bg-slate-600 rounded-md backdrop-blur-lg">
            <p className="flex justify-center">
            <img src={props.img} alt="images" className="w-80 h-auto shadow-md shadow-black m-2"/>
            </p>
            <div className="w-auto grid justify-center text-center p-4"> 
            <p className="font-bold text-4xl font-serif text-slate-200 text-center">{props.title}</p>
            <p className="font-serif text-slate-900">{props.description}</p>
            <p className="text-slate-400">{props.date}</p>
            </div>
        </div>
        </div>
    )
}

export default Card;