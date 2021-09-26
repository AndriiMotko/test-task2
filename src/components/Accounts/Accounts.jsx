import "./accounts.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Account from "../Account/Account";

const URL = "https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data";

export default function Accounts() {
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(URL, {
					headers: {
						"x-api-key": "ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59",
					},
				});
				setData(response.data.body.accounts);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	if (isLoading) {
		return <div className="App">Loading...</div>;
	}

	return (
		<Router basename="/test-task2">
			<div className="acccounts">
				<NavLink to="/eur" className="account" activeClassName="active">
					<div className="currency-icon euro">
						<span>€</span>
					</div>
					<p>{data["0"].title}</p>
					<span>{`€${data["0"].balance.toFixed(2)}`}</span>
				</NavLink>
				<NavLink to="/gbp" className="account" activeClassName="active">
					<div className="currency-icon gbp">
						<span>£</span>
					</div>
					<p>{data["1"].title}</p>
					<span>{`£${data["1"].balance.toFixed(2)}`}</span>
				</NavLink>
				<NavLink to="/usd" className="account" activeClassName="active">
					<div className="currency-icon usd">
						<span>$</span>
					</div>
					<p>{data["2"].title}</p>
					<span>{`$${data["2"].balance.toFixed(2)}`}</span>
				</NavLink>
				<NavLink to="/krw" className="account" activeClassName="active">
					<div className="currency-icon krw">
						<span>₩</span>
					</div>
					<p>{data["3"].title}</p>
					<span>{`₩${data["3"].balance.toFixed(2)}`}</span>
				</NavLink>
			</div>

			<Switch>
				<Route path="/eur" exact>
					<Account {...data["0"]} />
				</Route>
				<Route path="/gbp">
					<Account {...data["1"]} />
				</Route>
				<Route path="/usd">
					<Account {...data["2"]} />
				</Route>
				<Route path="/krw">
					<Account {...data["3"]} />
				</Route>
			</Switch>
		</Router>
	);
}
