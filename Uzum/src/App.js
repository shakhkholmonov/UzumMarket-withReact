import { Container } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import ProductCard from "./components/ProductCard";
import Usage from "./swiper/caroucel";

function Home() {
  const { data, isLoading, isError } = useQuery("goods", async () => {
    const res = await axios.get("http://localhost:3001/goods");
    return res.data;
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const likedGoods = data.filter((good) => good.status === true);
  const saleGoods = data.filter((good) => good.isBlackFriday);

  const sortedGoods = [...likedGoods, ...saleGoods];

  const slicedGoods = sortedGoods.slice(0, 15);

  const Armchairs = data.filter((good) => good.type === "furniture");

  const PC = data.filter((good) => good.type === "PC");

  const TV = data.filter((good) => good.type === "TV");

  const Audio = data.filter((good) => good.type === "audio");

  const Kitchen = data.filter((good) => good.type === "kitchen");

  const sections = [
    { slider: "", type: "Armchairs", arr: Armchairs },
    { slider: "", type: "PC", arr: PC },
    { slider: "", type: "TV", arr: TV },
    { slider: "", type: "Audio", arr: Audio },
    { slider: "", type: "Kitchen", arr: Kitchen },
  ];

  return (
    <>
      {" "}
      <div className="topheader">
        <div className="topheaderin">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21 21">
            <g
              fill="none"
              fillRule="evenodd"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(4 2)"
            >
              <path d="m6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 0 0 2.564 3.05" />
              <circle cx="6.5" cy="6.5" r="2.5" />
            </g>
          </svg>
          <div className="texts">
            <a href="#" aria-label="Location">
              Shahar: Samarqand
            </a>
            <a style={{ marginLeft: "20px" }} href="https://uzum.uz/uz/about/delivery-points">
              Topshirish punktlari
            </a>
            <p style={{ marginLeft: "120px" }}>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
            <a style={{ marginLeft: "120px" }} href="https://uzum.uz/uz/faq">
              Savol-Javoblar
            </a>
            <a style={{ marginLeft: "20px" }} href="#">
              Buyurtmalarim
            </a>
            <a style={{ marginLeft: "20px" }} href="#">
              O'zbekcha
            </a>
          </div>
        </div>
      </div>
      <Container maxWidth="lg">
        <Usage />
        <div className="prods_div">
          {slicedGoods.map((good) => (
            <ProductCard key={good.id} good={good} />
          ))}
        </div>
        {sections.map((item, i) => (
          <section key={i} className="section_style">
            <div>
              <h1>
                <p>{item.type}</p>
              </h1>
              <div className="prods_div">
                {item.arr.map((good) => (
                  <ProductCard key={`${good.id}_${good.type}`} good={good} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </Container>
    </>
  );
}

export default Home;
