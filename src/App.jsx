/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
// imort css
import './main.css'
// import profile image
import profile from './assets/male1.jpg'
// importing card from react bootstrp
import { Card } from 'react-bootstrap'
// import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'
// react icons
import { FaArrowUp } from 'react-icons/fa'
const App = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [searchTerm, setSearchTerm] = useState("");
  const products = [
    {
      id: 1,
      name: "casio",
      image: profile,
      link: "link of the product"
    },
    {
      id: 2,
      name: "calci",
      image: profile,
      link: "link of the product"
    },
    {
      id: 3,
      name: "watch",
      image: profile,
      link: "link of the product"
    },
    {
      id: 4,
      name: "mobile",
      image: profile,
      link: "link of the product"
    },
    {
      id: 5,
      name: "cups",
      image: profile,
      link: "link of the product"
    },
    {
      id: 6,
      name: "electronics",
      image: profile,
      link: "link of the product"
    },
    {
      id: 7,
      name: "bags",
      image: profile,
      link: "link of the product"
    },
  ]

  // Create a map of first characters to products (map = accumulator , products = currentValue)
  const productMap = products.reduce((map, product) => {
    const firstChar = product.name.charAt(0).toLowerCase();
    if (!map[firstChar]) {
      map[firstChar] = [];
    }
    map[firstChar].push(product);
    return map;
  }, {});

  // Get the products that start with the search term
  const getProducts = (searchTerm) => {
    if (searchTerm === "") {
      return products;
    } else {
      const firstChar = searchTerm.charAt(0).toLowerCase();
      return productMap[firstChar]?.filter(product =>
        product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      ) || [];
    }
  };

  return (
    <>
      <div className="section profile middel" id="profile">
        <div
          data-aos='fade-down' data-aos-duration="2500"
          className="section-title">
          <a href="#" target="_blank">
            <img
              data-aos='fade-down' data-aos-duration="1600"
              src={profile} className="profile_dp" alt="" title="follow to Instagram" />
            <h4
              data-aos='fade-down' data-aos-duration="1400"
              className="title">GRK Digital Fashions</h4>
          </a>
          <h5
            data-aos='fade-down' data-aos-duration="1200"
            className="section_subtitle">@grkdigital_fashions</h5>
        </div>

        {/* search input */}
        <input
          data-aos='fade-down' data-aos-duration="1000"
          className="search"
          style={{ display: "block", margin: 'auto' }}
          type="text"
          value={searchTerm}
          placeholder="search......"
          onChange={(event) => { setSearchTerm(event.target.value) }}
        />
        <div className="products_div">
          <div className="card_div cards_align">
            {getProducts(searchTerm).map((item) => {
              return (
                <Card
                  data-aos='fade-up' data-aos-duration="2500"
                  className="card" key={item.id}>
                  <a href="#"><Card.Img variant="top" src={item.image} title="Follow to site" /></a>
                  <Card.Body>
                    <Card.Text >
                      <button className="copy_text"
                        onClick={() => navigator.clipboard.writeText(item.link)}>COPY LINK</button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
      <div className="floating-button">
        <a href="profile"><FaArrowUp /></a>
      </div>
    </>

  )
}

export default App
