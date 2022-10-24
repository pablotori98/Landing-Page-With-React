import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />

			<Jumbotron />
			<div className="d-flex m-4">
				<Card img="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/10/24/16665852848983.jpg"
				textTitle= "Fernando Alonso"
				/>

				<Card img="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/25/16458014237280.jpg" 
				textTitle= "Carlos Sainz"
				/>

				<Card img="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/10/23/16665585672551.jpg" 
				textTitle= "Max Verstappen"
				/>

				<Card img="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/08/28/16616934513327.jpg" 
				textTitle= "Hamilton and Alonso"
				/>
			</div>
		</div>
	);
};

export default Home;
