import Accounts from "../Accounts/Accounts";
import RequestSection from "../RequestSection/RequestSection";

export default function HomePage() {
	return (
		<div className="homepage">
			<Accounts />
			<RequestSection />
		</div>
	);
}
