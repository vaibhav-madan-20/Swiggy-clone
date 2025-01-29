import ItemList from "./ItemList";

const RestaurantCategory = ({ props, showItems, setShowIndex }) => {
    const handleClick = () => setShowIndex();

    return (
        <div className="w-3/5 mx-auto my-4 bg-stone-100 rounded-lg border border-gray-300 shadow-lg p-4 hover:bg-stone-200 ">
            <div className="flex justify-between cursor-pointer transition-colors p-2 rounded-md" onClick={handleClick}>
                <span className="font-bold text-gray-800">
                    {props.card.card.title} ({props.card.card.itemCards.length})
                </span>
                <span className="">{showItems ? '⬆️' : '⬇️'}</span>
            </div>
            <div>
                {showItems && <ItemList items={props.card.card.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;