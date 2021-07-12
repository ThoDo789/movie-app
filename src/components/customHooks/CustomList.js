import { useLocation } from "react-router-dom";


const useCustomList = (listFilm) => {
  const { pathname } = useLocation();
 

  if (listFilm.length !== 0) {
    
    let listTotal = [
      Object.entries(listFilm.phim)[0][1],
      Object.entries(listFilm.phim)[1][1],
      Object.entries(listFilm.phim)[2][1],
      Object.entries(listFilm.phim)[3][1],
    ];
    let listTotalStore = [
      Object.entries(listFilm.phim)[0][1],
      Object.entries(listFilm.phim)[1][1],
      Object.entries(listFilm.phim)[2][1],
      Object.entries(listFilm.phim)[3][1],
    ];
    localStorage.setItem("newList",JSON.stringify(listTotalStore.flat()))
    switch (pathname) {
      case "/":
        return listTotal.flat();
        

      case "/phim-bo":
        return listTotal[0].flat();
        
      case "/phim-le":
        return listTotal[1].flat();
        
      case "/phim-chieu-rap":
        return listTotal[2].flat();
        
      case "/phim-hoat-hinh":
        return listTotal[3].flat();
        
      case "/phim-tinh-cam":
        return listTotal.flat().filter(item=>(item.category==="Phim tình cảm"));
      case "/phim-hanh-dong":
        return listTotal.flat().filter(item=>(item.category==="Phim hành động"));
      case "/phim-phieu-luu":
        return listTotal.flat().filter(item=>(item.category==="Phim phiêu lưu"));
      case "/phim-co-trang":
        return listTotal.flat().filter(item=>(item.category==="Phim cổ trang"));
      case "/phim-kinh-di":
        return listTotal.flat().filter(item=>(item.category==="Phim kinh dị"));
      case "/phim-hai":
         return listTotal.flat().filter(item=>(item.category==="Hài Hước"));
      case "/tv-show":
          return listTotal.flat().filter(item=>(item.category==="TV SHOW"));   
      default:
        return listTotal.flat();
        
    }

    // function shuffle(array) {
    //   return array.sort(() => Math.random() - 0.5);
    // }
 
  }

};

export default useCustomList;
