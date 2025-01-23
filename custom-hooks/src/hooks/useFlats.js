import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

function useFlats() {
  const [flats, setFlats] = useState([]);
  const {
    getItem, setItem
  } = useLocalStorage("FLATS");

  const getFlatsFromLocalStorage = () => {
    const _flats = getItem();
    return _flats;
  };

  const setFlatsInLocalStorage = () => {
    setItem(flats);
  }

  useEffect(() => {
    const _flats = getFlatsFromLocalStorage();
    setFlats(
      [
        ..._flats,
      ]
    )
  }, []);

  useEffect(() => {
    setFlatsInLocalStorage();
  }, [flats]);

  const addFlat = ({
    address,
    price,
  }) => {
    setFlats([
      ...flats,
      {
        key: flats.length,
        address,
        price,
      }
    ]);
  }

  return {
    flats,
    setFlats,
    addFlat
  }

}

export default useFlats;