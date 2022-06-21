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
  DescriptionContent,
  MLButton,
} from "./Details.styled";
import Logo from "../../assets/Logo_ML@2x.png.png.png";
import Search from "../../assets/ic_Search@2x.png.png.png";

import MLTextField from "../../components/MLTextField/MLTextField";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  API,
  PORT,
  SEARCH_PRODUCTS,
  SEARCH_PRODUCTS_LIMIT,
  SEARCH_PRODUCT_BY_ID,
} from "../../config/api";
import { HorizontalLine, MSpacing, SSpacing, XSSpacing } from "../../components/Spacing.styled";
import MLCurrencyFormat from "../../components/MLCurrencyFormat/MLCurrencyFormat";
import { MLLink, MLText } from "../../components/Typography.styled";

const Details = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  console.log(id);

  // let params = new URLSearchParams(useLocation().search);
  // const searchParam = params.get("search");

  const [filterBy, setFilterBy] = useState("");
  const [categories, setCategories] = useState([]);
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    searchProduct(id);
  }, [id]);

  // useEffect(() => {
  //   console.log(filterBy);
  //   onClickSearch();
  //   // eslint-disable-next-line
  // }, [searchParam]);

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
        url: `${API}:${PORT}/${SEARCH_PRODUCT_BY_ID}?ids=${filter}`,
        withCredentials: false,
      })
        .then((res) => {
          console.log(res);
          setCategories(res.data?.found?.item?.categories);
          setItem(res.data?.found?.item);
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
    setItem(null);
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
        <ProductItemRow>
          <ProductItemColumn className="w-75">
            <ProductItemColumnContent className="w-start">
              <MLImg
                src={item?.picture}
                alt="Search-logo"
                width={"25rem"}
                height={"25rem"}
              ></MLImg>
            </ProductItemColumnContent>
          </ProductItemColumn>
          <ProductItemColumn className="w-25">
            <ProductItemColumnContent className="w-start">
              <DescriptionContent>
                <ProductItemColumn>
                  <MLText className="xxxs">
                    {item?.condition === "new" ? "Nuevo" : item?.condition}{" "}
                    {item?.sold_quantity} vendidos
                  </MLText>
                  <XSSpacing />
                  <MLText className="xs bold">{item?.title}</MLText>
                  <XSSpacing />
                  <MLCurrencyFormat
                    value={String(item?.price?.amount)}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                    prefix={"$"}
                    renderText={(value: any) => (
                      <MLText className="xxl bold">{value}</MLText>
                    )}
                  />
                  <SSpacing />
                  <MLButton>Comprar</MLButton>
                </ProductItemColumn>
              </DescriptionContent>
            </ProductItemColumnContent>
          </ProductItemColumn>
        </ProductItemRow>
        <ProductItemRow>
          <MLText>Descripcion del Producto</MLText>
        </ProductItemRow>
        <ProductItemRow>
          <ProductItemColumn className="w-75">
            <ProductItemColumnContent className="w-start">
              <DescriptionContent>{item?.description}</DescriptionContent>
            </ProductItemColumnContent>
          </ProductItemColumn>
        </ProductItemRow>
        {/* {items.map((item, index) => {
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
        })} */}
      </ProductLayout>
    </HomeLayout>
  );
};

export default Details;
