import { Link } from 'react-router-dom';

function DigitalMarketplaceDescription() {
  return (
    <div className="digitalMarketplace__description">
      <h1>discover, and collect digital art nfts</h1>
      <p>
        Digital art marketplace for crypto collections and non-fungible tokens.
        Buy, Sell, and discover exclusive digital assets
      </p>
      <Link to="more-nfts">
        <button type="button">Explore Now</button>
      </Link>
      <div className="digitalMarketplace__description--statistics">
        <div className="statisticsCard">
          <p>98K+</p>
          <span>Artwork</span>
        </div>
        <div className="statisticsCard">
          <p>12K+</p>
          <span>Auction</span>
        </div>
        <div className="statisticsCard">
          <p>15K+</p>
          <span>Artist</span>
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketplaceDescription;
