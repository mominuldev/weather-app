import { useState } from "react";
import { useLocalStorage } from "../hooks";
import { createContext } from "react";
import { FavoritesContext } from "../context";

const FavoritesProvider = ({ children }) => {
	const [favorites, setFavorites] = useLocalStorage("Favorite", []);

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
