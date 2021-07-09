import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getFlatList } from "../../container/movieSlice";

const useCustomList = (list) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  if (list.length !== 0) {
    let listPhim;
    let listTotal = [
      Object.entries(list.phim)[0][1],
      Object.entries(list.phim)[1][1],
      Object.entries(list.phim)[2][1],
      Object.entries(list.phim)[3][1],
    ];

    switch (pathname) {
      case "/":
        listPhim = listTotal;
        dispatch(getFlatList(listPhim));
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
