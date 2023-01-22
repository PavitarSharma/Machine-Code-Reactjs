import "./Pagination.css";
import { useEffect } from "react";
import { useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)

  const fetchedProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`);
    const data = await response.json();
    if (data && data.products) {
      setProducts(data?.products);
      setTotalPages(data.total / 10)
    }
  };

  useEffect(() => {
    fetchedProducts();
  }, [page]);

  const selectedPageHandle = (selectPage) => {
    if (
      selectPage >= 1 &&
      // selectPage <= products.length / 10 &&
      selectPage <= totalPages &&
      selectPage !== page
    ) {
      setPage(selectPage);
    }
  };
  return (
    <div>
      {/* <div className="products">
        {products.length > 0 &&
          products.slice(page * 10 - 10, page * 10).map((product, index) => (
            <div key={product.id} className="product-single">
              <img src={product.thumbnail} alt={product.title} />
              <span>{product.title}</span>
            </div>
          ))}
      </div> */}
      <div className="products">
        {products.length > 0 &&
          products.map((product, index) => (
            <div key={product.id} className="product-single">
              <img src={product.thumbnail} alt={product.title} />
              <span>{product.title}</span>
            </div>
          ))}
      </div>

      {/* {products.length > 0 && (
        <div className="pagination">
          <span onClick={() => setPage(page - 1)} className={page > 1 ? "" : "pagination-disable"}>Prev</span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <spna
                key={i}
                className={
                  page === i + 1
                    ? "pagination-selected"
                    : "pagination-unselected"
                }
                onClick={() => selectedPageHandle(i + 1)}
              >
                {i + 1}
              </spna>
            );
          })}
          <span onClick={() => setPage(page + 1)} className={page < products.length / 10 ? "" : "pagination-disable"}>Next</span>
        </div>
      )} */}

      <div className="pagination">
          <span onClick={() => setPage(page - 1)} className={page > 1 ? "" : "pagination-disable"}>Prev</span>
          {[...Array(totalPages)].map((_, i) => {
            return (
              <spna
                key={i}
                className={
                  page === i + 1
                    ? "pagination-selected"
                    : "pagination-unselected"
                }
                onClick={() => selectedPageHandle(i + 1)}
              >
                {i + 1}
              </spna>
            );
          })}
          <span onClick={() => setPage(page + 1)} className={page < totalPages ? "" : "pagination-disable"}>Next</span>
        </div>
    </div>
  );
};

export default Pagination;
