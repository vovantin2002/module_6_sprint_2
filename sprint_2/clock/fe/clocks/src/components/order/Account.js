export default function Account() {
    function displayTwoPrices(originalPrice, discountedPrice) {
        return (
            <div>
      <span style={{textDecoration: "line-through"}}>
        {originalPrice}
      </span>
                <span>{discountedPrice}</span>
            </div>
        );
    }

    return(
        <>
            <p>{displayTwoPrices(6672000)}</p>
        </>
    )
}