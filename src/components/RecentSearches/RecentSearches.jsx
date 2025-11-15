import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAuth } from "../../context/AuthContext";
import { CityCard } from "./CityCard/CityCard";

export const RecentSearches = () => {
  const { user, localRecents } = useAuth();
  const items = user ? user.recents : localRecents;

  if (!items || items.length === 0) return <p>No recent searches</p>;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {items.map((city, index) => (
        <CityCard key={index} city={city} />
      ))}
    </Slider>
  );
};
