import Content from "../components/Contents";
import CartoonFilm from "../components/pages/categories/CartoonFilm";
import Cinema from "../components/pages/categories/Cinema";
import DramaFilm from "../components/pages/categories/DramaFilm";
import FeatureFilm from "../components/pages/categories/FeatureFilm";
import SearchResult from "../components/pages/searchResult/SearchResult";
import MovieDetail from "../components/pages/MovieDetails/index";
import PageNotFound from "../components/pages/pageNotFound";
import Romance from "../components/pages/categories/RomanceFilm";
import ActionFilm from "../components/pages/categories/ActionFilm";
import AdventureMovie from "../components/pages/categories/AdventureMovie";
import Comedy from "../components/pages/categories/Comedy";
import TVShow from "../components/pages/categories/TVShow";
import CostumeDramas from "../components/pages/categories/CostumeDramas";
import HorrorFilm from "../components/pages/categories/HorrorFilm";

export const listRoute = [
  { path: "/", exact: true, main: () => <Content /> },
  { path: "/phim-hoat-hinh", exact: true, main: () => <CartoonFilm /> },
  { path: "/phim-chieu-rap", exact: true, main: () => <Cinema /> },
  { path: "/phim-bo", exact: true, main: () => <DramaFilm /> },
  { path: "/phim-le", exact: true, main: () => <FeatureFilm /> },
  { path: "/search", exact: true, main: () => <SearchResult /> },
  { path: "/detail/:url", exact: true, main: () => <MovieDetail /> },
  { path: "/phim-tinh-cam", exact: true, main: () => <Romance /> },
  { path: "/phim-hanh-dong", exact: true, main: () => <ActionFilm /> },
  { path: "/phim-phieu-luu", exact: true, main: () => <AdventureMovie /> },
  { path: "/phim-hai", exact: true, main: () => <Comedy /> },
  { path: "/tv-show", exact: true, main: () => <TVShow /> },
  { path: "/phim-co-trang", exact: true, main: () => <CostumeDramas /> },
  { path: "/phim-kinh-di", exact: true, main: () => <HorrorFilm /> },
  { path: "", exact: true, main: () => <PageNotFound /> },
];
