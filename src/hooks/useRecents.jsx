import { useAuth } from "../context/AuthContext";
import { weatherAPI } from "../api/weatherAPI";
import { userAPI } from "../api/userAPI";

export const useRecents = () => {
  const { user, localRecents, setLocalRecents, updateUser } = useAuth();

  const addCity = async (name) => {
    const cityName = name.trim();
    if (!cityName) return;

    try {
      const city = await weatherAPI.getCurrent(cityName);

      const alreadyExists = (arr) => arr.some((c) => c.id === city.id);

      if (user) {
        if (alreadyExists(user.recents)) return city;

        const updatedRecents = [city, ...user.recents.filter((c) => c.id !== city.id)].slice(0, 10);

        await userAPI.update(user.id, { recents: updatedRecents });
        updateUser({ ...user, recents: updatedRecents });
      } else {
        if (alreadyExists(localRecents)) return city;

        setLocalRecents((prev) => {
          const filtered = prev.filter((c) => c.id !== city.id);
          const updated = [city, ...filtered].slice(0, 10);
          return updated;
        });
      }

      return city;
    } catch (err) {
      throw new Error(err.message || "City not found");
    }
  };

  const refreshCity = async (city) => {
    try {
      const fresh = await weatherAPI.getCurrentWithFreshTime(city.name);

      if (user) {
        const updatedRecents = user.recents.map((c) => (c.id === city.id ? fresh : c));
        const updatedFavourites = user.favourites.map((c) => (c.id === city.id ? fresh : c));

        updateUser({
          ...user,
          recents: updatedRecents,
          favourites: updatedFavourites,
        });

        userAPI.update(user.id, { recents: updatedRecents, favourites: updatedFavourites }).catch(console.error);
      } else {
        setLocalRecents((prev) => prev.map((c) => (c.id === city.id ? fresh : c)));
      }
    } catch (err) {
      console.warn("Failed to refresh:", city.name);
    }
  };
  
  const removeCity = async (cityId) => {
    if (user) {
      const newRecents = user.recents.filter((c) => c.id !== cityId);
      const newFavourites = user.favourites.filter((c) => c.id !== cityId);

      updateUser({ ...user, recents: newRecents, favourites: newFavourites });

      await userAPI.update(user.id, { recents: newRecents, favourites: newFavourites });
    } else {
      setLocalRecents((prev) => prev.filter((c) => c.id !== cityId));
    }
  };

  return { addCity, refreshCity, removeCity };
};
