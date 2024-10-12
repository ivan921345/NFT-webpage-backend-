function TopCollectionsOverUserCard({ id, userPict, userName, price, income }) {
  const incomeClasslist = {
    greenIncome: 'greenIncome',
    redIncome: 'redIncome',
  };
  return (
    <div className="userCard">
      <p className="userCard__id">{id}</p>
      <div className="userCard__profilePict">
        <img src={userPict} alt="user" />
      </div>
      <div className="userCard__nameSect">
        <p className="userName">{userName}</p>
        <p className="price">{price}</p>
      </div>
      <div
        className={`increaseInIncome ${
          income > 15.9
            ? incomeClasslist.greenIncome
            : incomeClasslist.redIncome
        }`}
      >
        +{income}%
      </div>
    </div>
  );
}

export default TopCollectionsOverUserCard;
