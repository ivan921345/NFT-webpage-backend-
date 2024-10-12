function TopCollectionCurrentNftCard({
  nft: { largeImageURL = '', user = '', userImageURL = '', price = 0.45 },
}) {
  return (
    <div className="nftCard">
      <div className="nftCard__image">
        <img src={largeImageURL} alt="nft" />
      </div>
      <div className="nftAbout">
        <div className="nftAbout__author">
          <div className="authorImage">
            <img src={userImageURL} alt="nft's author" />
          </div>
          <div className="authorName">
            <p>{user}</p>
            <p className="authorName__text">10 in stock</p>
          </div>
        </div>
        <div className="nftBid">
          <p className="nftBid__text">highest bid</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}

export default TopCollectionCurrentNftCard;
