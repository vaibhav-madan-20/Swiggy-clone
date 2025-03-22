import { useEffect, useState } from "react";

import { MENU_API } from "./constants";

const useRestaurantMenu = (resId)=>{

    const [resInfo,setResInfo] = useState(null);
    
    useEffect(()=>{
        async function fetchData() {
            try {
                const data = await fetch(MENU_API + resId);
                if (!data.ok) {
                    throw new Error("Error while fetching restaurant data");
                }
                const json = await data.json();
                // console.log(json);
                setResInfo(json);
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchData()
    },[])

    return resInfo;
}

export default useRestaurantMenu;