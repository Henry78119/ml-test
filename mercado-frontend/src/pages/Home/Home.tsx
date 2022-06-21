import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MLImg } from "../../components/MLImg/MLImg.styled";
import {
  Header,
  HomeLayout,
  ComponentContainer,
  ComponentContainer2,
  SearchContainer,
  BreadcrumbLayout,
  BreadcrumbItem,
  ProductItemRow,
  ProductItemColumn,
  ProductLayout,
  ProductItemColumnContent,
  BreadcrumbItemSeparator,
} from "./Home.styled";
import Logo from "../../assets/Logo_ML@2x.png.png.png";
import Search from "../../assets/ic_Search@2x.png.png.png";

import MLTextField from "../../components/MLTextField/MLTextField";
import axios from "axios";
import {
  API,
  PORT,
  SEARCH_PRODUCTS,
  SEARCH_PRODUCTS_LIMIT,
} from "../../config/api";
import { HorizontalLine } from "../../components/Spacing.styled";
import MLCurrencyFormat from "../../components/MLCurrencyFormat/MLCurrencyFormat";
import { MLLink, MLText } from "../../components/Typography.styled";

const Home = () => {
  const navigate = useNavigate();

  let params = new URLSearchParams(useLocation().search);
  const searchParam = params.get("search");

  const [filterBy, setFilterBy] = useState(searchParam);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    console.log(filterBy);
    onClickSearch();
    // eslint-disable-next-line
  }, [searchParam]);

  const onClickSearch = () => {
    if (filterBy !== null) {
      navigate("/items?search=" + filterBy);
      searchProduct(filterBy);
    }
  };

  const breadcrumbList = categories.map((item, index) => {
    return (
      <div key={index}>
        <BreadcrumbItem>
          <MLLink
            href="/"
            onClick={(e) => e.preventDefault()}
            className="xs grey"
          >
            {item}
          </MLLink>
          <BreadcrumbItemSeparator>
            <MLText className="xs grey">
              {" "}
              {index === categories.length - 1 ? "" : " > "}
            </MLText>
          </BreadcrumbItemSeparator>
        </BreadcrumbItem>
      </div>
    );
  });

  const searchProduct = async (filter: any) => {
    try {
      axios({
        method: "get",
        url: `${API}:${PORT}/${SEARCH_PRODUCTS}?value=${filter}&limit=${SEARCH_PRODUCTS_LIMIT}`,
        withCredentials: false,
      })
        .then((res) => {
          console.log(res);
          setCategories(res.data?.found?.categories);
          setItems(res.data?.found?.items);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      throw err;
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      console.log("do validate");
      onClickSearch();
    }
  };

  const onClickLogo = () => {
    navigate("/");
    setFilterBy("");
    setCategories([]);
    setItems([]);
  };

  return (
    <HomeLayout>
      <Header>
        <ComponentContainer className="mr-15">
          <ComponentContainer2
            className="pointer"
            onClick={() => onClickLogo()}
          >
            <MLImg
              src={Logo}
              alt="ML-logo"
              width={"5rem"}
              height={"3rem"}
            ></MLImg>
          </ComponentContainer2>
        </ComponentContainer>
        <ComponentContainer className="plr-10">
          <ComponentContainer2 className="w-500">
            <MLTextField
              label="Nunca dejes de buscar"
              onChange={(e: any) => setFilterBy(e.target.value)}
              onKeyDown={handleKeyDown}
              value={filterBy}
            />
          </ComponentContainer2>
          <ComponentContainer2>
            <SearchContainer onClick={() => onClickSearch()}>
              <MLImg
                src={Search}
                alt="Search-logo"
                width={"1.6rem"}
                height={"1.6rem"}
              ></MLImg>
            </SearchContainer>
          </ComponentContainer2>
        </ComponentContainer>
      </Header>

      {/* <SSpacing /> */}
      <BreadcrumbLayout>{breadcrumbList}</BreadcrumbLayout>

      <ProductLayout>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <ProductItemRow className="bg-white">
                <ProductItemColumn className="w-25">
                  <ProductItemColumnContent>
                    <MLImg
                      src={item[0].picture}
                      alt="Search-logo"
                      width={"15rem"}
                      height={"15rem"}
                    ></MLImg>
                  </ProductItemColumnContent>
                </ProductItemColumn>
                <ProductItemColumn className="w-75 p-1">
                  <ProductItemColumnContent className="w-start">
                    <MLCurrencyFormat
                      value={String(item[0].price?.amount)}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix={"$"}
                      renderText={(value: any) => <MLText>{value}</MLText>}
                    />
                  </ProductItemColumnContent>

                  <ProductItemColumnContent className="w-start">
                    <MLLink
                      className="xs"
                      onClick={() => {
                        navigate("/items/" + item[0].id);
                      }}
                    >
                      {item[0]?.title}
                    </MLLink>
                  </ProductItemColumnContent>
                </ProductItemColumn>
              </ProductItemRow>
              <HorizontalLine className="my-0" />
            </div>
          );
        })}
      </ProductLayout>
    </HomeLayout>
  );
};

export default Home;
