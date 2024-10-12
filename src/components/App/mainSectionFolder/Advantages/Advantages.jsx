import './Advantages.scss';
import { ReactComponent as ChartIcon } from 'icons/chart.svg';
import { ReactComponent as Bank } from 'icons/bank.svg';

function Advantages() {
  return (
    <section className="advantagesSection">
      <h1>the amaizing nft art of the world here</h1>
      <div className="fastTransactions">
        <div className="fastTransactions__ico">
          <Bank width="25px" height="25px" />
        </div>
        <div className="fastTransactions__content">
          <p className="contentTitle">Fast Transactions</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eius
            suscipit iste quia ipsam dolor cupiditate amet nihil maiores rem.
          </p>
        </div>
      </div>
      <div className="growthTransaction">
        <div className="growthTransaction__ico">
          <ChartIcon width="25px" height="25px" />
        </div>
        <div className="growthTransaction__content">
          <p className="contentTitle">Growth Transaction</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, ex
            sequi illo necessitatibus ab harum!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
