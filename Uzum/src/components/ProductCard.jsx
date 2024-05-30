import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const ProductCard = ({ good }) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={3} xl={2}>
      <Card sx={{ maxWidth: 285, mb: 2, borderRadius: 3, marginTop: 4 }}>
        <CardMedia className="img" component="img" height="260" image={good && good.media[0]} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {good && good.title.slice(0, 48) + "..."}
          </Typography>
          <div className="rate">
            <span class="fa fa-star checked "></span>
            <h1 style={{ fontSize: "12px", color: "grey" }}>6.5 (53452 otzivlar)</h1>
          </div>
          <Typography
            sx={{ marginTop: "5px", fontSize: "12px" }}
            variant="body2"
            bgcolor={"yellow"}
            width={"90px"}
            borderRadius={"6px"}
            paddingLeft={"6px"}
          >
            {Math.floor((good && good.price * 12) / 100)} руб/мес
          </Typography>

          <div>
            <Typography
              className="sale"
              sx={{ fontSize: "10px", color: "grey", marginTop: "20px" }}
              variant="body2"
              color="text.primary"
            >
              {good && good.price} руб
            </Typography>
            <Typography sx={{ color: "black", display: "flex" }} variant="body2" color="text.secondary">
              {good && good.price - Math.floor((good.price * good.salePercentage) / 100)} руб
              <div
                style={{
                  marginLeft: "150px",
                  border: "solid 1px",
                  width: "24px",
                  height: "24px",
                  borderRadius: "25px",
                }}
              >
                <svg
                  data-v-40da8b10=""
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ui-icon  add-cart-icon"
                >
                  <path
                    d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                    fill="black"
                  ></path>
                  <path
                    d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
