function NftCard({ nft: { previewURL, user, userImageURL } }) {
  return (
    <div className="container">
      <img src={previewURL} alt="nft example" />
      <div className="nftInfo">
        <p>{user}</p>
        <div className="authorImageSect">
          <img src={userImageURL} alt="authorImage" />
          <p>0.25</p>
        </div>
        <button type="button">Place a Bid</button>
      </div>
    </div>
  );
}

export default NftCard;
