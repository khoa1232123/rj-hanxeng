import React, { useEffect, useState } from 'react';
import { FaCode } from 'react-icons/fa';
import Axios from 'axios';
import { Icon } from 'antd';
import ImageSlider from '../../utils/ImageSlider';
import FilterContinents from './sections/FilterContinents';
import FilterPrice from './sections/FilterPrice';
import SearchFeature from './sections/SearchFeature';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [products, setProducts] = useState([]);
  const [skipLoadMore, setSkipLoadMore] = useState(0);
  const [limitLoadMore, setLimitLoadMore] = useState(4);
  const [postSize, setPostSize] = useState(0);
  const [searchTerms, setSearchTerms] = useState('');
  const [filterlist, setFilterlist] = useState({
    continents: [],
    price: [],
  });

  const getProducts = (variables) => {
    Axios.post('/api/product/getProducts', variables).then((res) => {
      if (res.data.success) {
        console.log(res.data);
        if (variables.loadMore) {
          setProducts([...products, ...res.data.products]);
        } else {
          setProducts(res.data.products);
        }
        setPostSize(res.data.postSize);
      } else {
        alert('Failed to fectch product data!');
      }
    });
  };

  useEffect(() => {
    const variables = {
      skip: skipLoadMore,
      limit: limitLoadMore,
    };
    getProducts(variables);
  }, []);

  const onLoadMore = () => {
    let skip = skipLoadMore + limitLoadMore;
    const variables = {
      skip: skip,
      limit: limitLoadMore,
      loadMore: true,
    };

    getProducts(variables);
  };

  const renderProducts = products.map((product, index) => {
    return (
      <div key={`product-${index}`} className="col-12 col-md-3">
        <div className="card mb-4">
          <ImageSlider images={product.images} />
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </h5>
            <p className="card-text">{product.price}</p>
            <a href="#" className="btn btn-primary">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    );
  });

  const showFilteredResults = (filters) => {
    setSkipLoadMore(0);
    const variables = {
      skip: skipLoadMore,
      limit: limitLoadMore,
      filters: filters,
    };
    getProducts(variables);
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...filterlist };
    newFilters[category] = filters;

    showFilteredResults(newFilters);
    setFilterlist(newFilters);
  };

  const updateSearchTerms = (newSearchTerm) => {
    setSearchTerms(newSearchTerm);
    setSkipLoadMore(0);
    const variables = {
      skip: skipLoadMore,
      limit: limitLoadMore,
      filters: filterlist,
      searchTerm: newSearchTerm,
    };
    getProducts(variables);
  };

  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="header">
          <h2>
            Let's Travel Anywhere <Icon type="rocket" />
          </h2>
        </div>
        <div className="row">
          <div className="col-6 mb-4">
            <FilterContinents
              handleFilters={(filters) => handleFilters(filters, 'continents')}
            />
          </div>
          <div className="col-6 mb-4">
            <FilterPrice
              handleFilters={(filters) => handleFilters(filters, 'price')}
            />
          </div>
          <div className="col-12 mb-4 d-flex justify-content-end">
            <SearchFeature refreshFunction={updateSearchTerms} />
          </div>
          {products.length === 0 ? (
            <div className="col-12 mt-4">
              <h2>No post yet...</h2>
            </div>
          ) : (
            renderProducts
          )}
          {postSize >= limitLoadMore && (
            <div className="col-12 header">
              <button onClick={onLoadMore} className="btn btn-light btn-lg">
                Load more
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
