import ItemList from "./ItemList";

const RestaurantCategory = ({ props, showItems, setShowIndex }) => {
    const handleClick = () => setShowIndex();

    return (
        <div className="md:w-4/5 mx-auto my-4 bg-stone-100 rounded-lg border border-gray-300 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer transition-colors p-2 rounded-md" onClick={handleClick}>
                <span className="font-extrabold">
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