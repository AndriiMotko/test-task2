import "./sideBar.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Link,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../assets/icons/logo.svg";
import homeIcon from "../../assets/icons/home_icon.svg";
import sendIcon from "../../assets/icons/send_icon.svg";
import topIcon from "../../assets/icons/top_icon.svg";
import accountIcon from "../../assets/icons/account_icon.svg";
import profileImg from "../../assets/img/profile_img.png";
import HomePage from "../HomePage/HomePage";
import SendMoneyPage from "../SendMoneyPage/SendMoneyPage";

const URL = "https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data";

export default function SideBar() {
	const [data, setData] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(URL, {
					headers: {
						"x-api-key": "ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59",
					},
				});
				setData(response.data.body.accounts);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<Router>
			<div className="sideBar-wrapp">
				<img className="logo-img" src={logo} alt="Logo" />
				<nav>
					<NavLink to="" exact activeClassName="selected">
						<img src={homeIcon} alt="Home" />
						Home
					</NavLink>
					<NavLink to="/send-money" activeClassName="selected">
						<img src={sendIcon} alt="Send Money" />
						Send Money
					</NavLink>
					<NavLink to="/top-up" activeClassName="selected">
						<img src={topIcon} alt="Top Up" />
						Top Up
					</NavLink>
					<NavLink to="/accounts" activeClassName="selected">
						<img src={accountIcon} alt="Accounts" />
						Accounts
					</NavLink>
				</nav>
				<div className="profileNav">
					<img src={profileImg} alt="profileImg" />
					<Link to="#">Profile</Link>
				</div>
			</div>
			<Switch>
				<Route path="/send-money">{data && <SendMoneyPage {...data} />}</Route>
				<Route path="" exact>
					{data && <HomePage {...data} />}
				</Route>
			</Switch>
		</Router>
	);
}
