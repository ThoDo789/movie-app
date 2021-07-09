import { useLocation } from "react-router-dom";


const useCustomList = (listFilm) => {
  const { pathname } = useLocation();
 
 

  if (listFilm.length !== 0) {
    let listPhim;
    var listTotal = [
      Object.entries(listFilm.phim)[0][1],
      Object.entries(listFilm.phim)[1][1],
      Object.entries(listFilm.phim)[2][1],
      Object.entries(listFilm.phim)[3][1],
    ];
    
    switch (pathname) {
      case "/":
        listPhim = listTotal;
       
        break;

      case "/phim-bo":
        listPhim = listTotal[0];
        break;
      case "/phim-le":
        listPhim = listTotal[1];
        break;
      case "/phim-chieu-rap":
        listPhim = listTotal[2];
        break;
      case "/phim-hoat-hinh":
        listPhim = listTotal[3];
        break;
        
      default:
        listPhim = listTotal;
        break;
    }

    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }
    var newList = shuffle(listPhim.flat());
  }

  return newList;
};

export default useCustomList;
