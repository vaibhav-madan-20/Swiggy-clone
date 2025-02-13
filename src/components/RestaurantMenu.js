import { useParams } from "react-router-dom";
import { useState } from "react";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(0);
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return null;
    const { text } = resInfo.data.cards[0].card.card;
    const { cuisines, costForTwoMessage } = resInfo.data.cards[2].card.card.info;
    const categories = (resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards).filter(
        r => r?.["card"]?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    return (
        <div>
            <h1 className="font-bold my-6 text-2xl text-center">{text}</h1>
            <h2 className="font-bold text-lg text-center">{cuisines.join(",")} - {costForTwoMessage}</h2>
            <ul>
                {categories.map((c, index) => <RestaurantCategory props={c}
                    key={c.card.card.title}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => {
                        showIndex === index ? setShowIndex(false) :
                        setShowIndex(index)
                    }}
                />)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;