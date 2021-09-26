import "./homepage.css";
import Accounts from "../Accounts/Accounts";

export default function HomePage(data) {
	return (
		<div className="homepage">
			<h2 className="page-title">Your accounts</h2>
			{data && <Accounts {...data} />}
		</div>
	);
}
