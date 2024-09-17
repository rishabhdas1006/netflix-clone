import { ChevronDown, Bell, Search } from "lucide-react";
import { useState } from "react";
import profile_pic from "../../assets/konosuba.jpg";
import logo from "../../assets/logo.png";
import "./navbar.scss";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	window.onscroll = () => {
		setIsScrolled(window.scrollY === 0 ? false : true);
		return () => (window.onscroll = null);
	};
	return (
		<div className={isScrolled ? "navbar scrolled" : "navbar"}>
			<div className="container">
				<div className="left">
					<img src={logo} alt="" />
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className="right">
					<Search className="icon" />
					<span>KID</span>
					<Bell className="icon" />
					<img src={profile_pic} alt="" />
					<div className="profile">
						<ChevronDown className="icon" />
						<div className="options">
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
