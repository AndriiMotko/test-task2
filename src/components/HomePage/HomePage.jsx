import "./homepage.css";
import Accounts from "../Accounts/Accounts";
import RequestSection from "../RequestSection/RequestSection";

export default function HomePage() {
	return (
		<div className="homepage">
			<h2 className="page-title">Your accounts</h2>
			<div>
				<Accounts />
			</div>
			<RequestSection />
		</div>
	);
}
