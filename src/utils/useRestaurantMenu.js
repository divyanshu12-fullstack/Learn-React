import { useEffect, useState } from "react";
import { MENU_API1, MENU_API2 } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(MENU_API1 + resId + MENU_API2);
            const json = await data.json();
            setResInfo(json);
        } catch (error) {
            console.error("Failed to fetch menu data: ", error);
            setResInfo({});
        }
    };

    return resInfo;
};

export default useRestaurantMenu;