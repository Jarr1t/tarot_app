import "./globals.css";
import Carousel from "../../components/Carousel";

export default function Home() {
	return (
		<div>
			<h1>TarotShare</h1>
			<h3 style={{ textAlign: "center" }}>The Different Pulls</h3>
			<Carousel />

			{/* add card meaning
        have them be in 2 rows across the page
        The Differemt Pulls goes in too middle */}
		</div>
	);
}
