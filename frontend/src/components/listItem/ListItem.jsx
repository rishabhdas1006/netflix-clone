import "./listItem.scss";
import { Play, ListPlus, ThumbsUp, ThumbsDown } from "lucide-react";
import list_img from "../../assets/konosuba.jpg";
import dummy_vid from "../../assets/dummy_vid.mp4";

import { useState } from "react";

export default function ListItem({ index }) {
	const [isHovered, setIsHovered] = useState(false);
	const trailer = dummy_vid;
	return (
		<div
			className="listItem"
			style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img src={list_img} alt="" />
			{isHovered && (
				<>
					<video src={trailer} autoPlay={true} loop />
					<div className="itemInfo">
						<div className="icons">
							<Play className="icon" />
							<ListPlus className="icon" />
							<ThumbsUp className="icon" />
							<ThumbsDown className="icon" />
						</div>
						<div className="itemInfoTop">
							<span>1 hour 14 mins</span>
							<span className="limit">+16</span>
							<span>1999</span>
						</div>
						<div className="desc">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Praesentium hic rem eveniet error possimus,
							neque ex doloribus.
						</div>
						<div className="genre">Action</div>
					</div>
				</>
			)}
		</div>
	);
}
