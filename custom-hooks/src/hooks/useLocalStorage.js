function useLocalStorage(key) {
  const getItem = () => {
    return JSON.parse(window.localStorage.getItem(key))
  }

  const setItem = (flats) => {
    window.localStorage.setItem(key, JSON.stringify(flats));
  }

  return {
    getItem,
    setItem,
  }
}


export default useLocalStorage;