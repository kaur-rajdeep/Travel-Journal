import React from "react"
import Home from "./Components/Home";
import Card from "./Components/TravelCards";
import TravelData from "./TravelData";

function App() {

    const cards= TravelData.map((item)=>{
        return(
            <Card key={item.id}
            {...item}
            />
        )
    })
    return (
        <div className="bg-slate-900">
        <Home/>
        <section className="p-2">
            {cards}
        </section>
        </div>
    )
}

export default App;