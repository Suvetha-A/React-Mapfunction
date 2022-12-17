import React from "react";

function PlanetList() {
    const Planet = [ 'Mars' , 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];
   
    const planetList = Planet.map(name =><table><tr><td>{name}</td></tr></table>)
    return <div>{planetList}</div>
}
export default PlanetList