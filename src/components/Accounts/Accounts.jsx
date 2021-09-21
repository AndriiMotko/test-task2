import EUR from "../../assets/icons/EURO.png";
import GBP from "../../assets/icons/GBP.png";
import USD from "../../assets/icons/USD.png";
import KRW from "../../assets/icons/KRW.png"


export default function Accounts() {
    return (
        <div className="acccounts">
            <h2>Your accounts</h2>
            <div className="account">
                <img src={EUR} alt="Euro (EUR)" />
                <p>Euro (EUR)</p>
                <span>$451.00</span>
            </div>
            <div className="account">
                <img src={GBP} alt="British Sterling (GBP)" />
                <p>British Sterling (GBP)</p>
                <span>£10.00</span>
            </div>
            <div className="account">
                <img src={USD} alt="US Dollar (USD)" />
                <p>US Dollar (USD)</p>
                <span>$10234.20</span>
            </div>
            <div className="account">
                <img src={KRW} alt="South Korea Won (KRW)" />
                <p>South Korea Won (KRW)</p>
                <span>₩0.00</span>
            </div>
        </div>
    );
}
