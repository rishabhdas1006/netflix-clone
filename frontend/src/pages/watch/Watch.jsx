import { ChevronLeft } from "lucide-react";
import "./watch.scss";
import vid from "../../assets/dummy_vid.mp4";

export default function Watch() {
	return (
		<div className="watch">
			<div className="back">
				<ChevronLeft />
				Home
			</div>
			<video className="video" autoPlay progress controls src={vid} />
		</div>
	);
}
