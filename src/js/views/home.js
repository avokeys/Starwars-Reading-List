import React, {useContext} from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { VehicleCard } from "../component/vehicleCard";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store,actions} = useContext(Context);
	return(
	<div className="text-center mt-5  ">
		<h2>Characters</h2>
		<div className="characters d-flex">
			{store.characters.length > 0 &&  
				store.characters.map( ( item,index)=>{
					return(
						
						<CharacterCard key={index} data= {item} />
			

					)
				}) 
			}
		</div>
		<h2>Planets</h2>
		<div className="planets d-flex">
			{store.planets.length > 0 && 
			store.planets.map((item,index) =>{
				return(
					<PlanetCard key={index} data= {item} />
					)
		})}

		</div>
		<h2>Vehicles</h2>
		<div className="vehicles d-flex">
		{store.vehicles.length > 0 && 
			store.vehicles.map((item,index) =>{
				return(
					<VehicleCard key={index} data = {item}/>
				)
		})}
		</div>
		
						
	</div>
	
	)
	};
	


