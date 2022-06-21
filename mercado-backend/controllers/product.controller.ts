const axios = require("axios");
const {
  API,
  SEARCH_BY_QUERY,
  SEARCH_BY_CATEGORY,
  SEARCH_BY_ID,
} = require("../config/api");

const searchProduct = async (filter: any) => {
  try {
    const response = await axios.get(
      `${API}${SEARCH_BY_QUERY}${filter.value}&limit=${filter.limit}`
    );
    if (response.status === 200) {
      let productList = response.data;

      let categories = productList.filters[0].values[0].path_from_root.map(
        (category: { name: any }) => category.name
      );

      let items = productList.results.map(
        (item: {
          id: any;
          title: any;
          price: any;
          currency_id: any;
          decimal_places: any;
          currency_symbol: any;
          secure_thumbnail: any;
          thumbnail: any;

          condition: any;
          shipping: any;
        }) => {
          return [
            {
              id: item.id,
              title: item.title,
              price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: 2,
              },
              picture: item.thumbnail,
              condition: item.condition,
              free_shipping: item.shipping.free_shipping,
            },
          ];
        }
      );

      return {
        author: {
          name: "Henry",
          lastName: "Villanueva",
        },
        categories,
        items,
      };
    } else {
      throw new Error("Error al consultar producto");
    }
  } catch (err) {
    throw err;
  }
};

const searchProductById = async (filter: any) => {
  try {
    const response = await axios.get(`${API}${SEARCH_BY_ID}?ids=${filter.ids}`);
    if (response.status === 200) {
      let productFound = response.data[0].body;

      const {
        id,
        title,
        price,
        currency_id,
        secure_thumbnail,
        thumbnail,
        pictures,
        condition,
        shipping,
        sold_quantity,
        category_id,
      } = productFound;



      let description = "";
      const responseDescription = await axios.get(
        `${API}${SEARCH_BY_ID}?ids=${filter.ids}/description`
      );
      if (responseDescription.status === 200) {
        description = responseDescription.data[0].body.plain_text;
      }

      let categories = "";
      const responseCategories = await axios.get(
        `${API}${SEARCH_BY_CATEGORY}${category_id}`
      );
      if (responseCategories.status === 200) {
        categories = responseCategories.data.path_from_root.map((itemP: any)=> itemP.name);
      }

      let item = {
        id,
        title,
        price: {
          currency: currency_id,
          amount: price,
          decimals: 2,
        },
        picture:
          pictures && pictures.length > 0
            ? pictures[0].secure_url
            : secure_thumbnail || thumbnail,
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity,
        category_id,
        description,
        categories
      };

      return {
        author: {
          name: "Henry",
          lastName: "Villanueva",
        },
        item,
      };
    } else {
      throw new Error("Error al consultar producto");
    }
  } catch (err) {
    throw err;
  }
};

const mode = (arr: any) => {
  return arr
    .sort(
      (a: any, b: any) =>
        arr.filter((v: any) => v === a).length -
        arr.filter((v: any) => v === b).length
    )
    .pop();
};

module.exports = {
  searchProduct,
  searchProductById,
};
