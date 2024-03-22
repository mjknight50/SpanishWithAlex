"use client";

import { useState } from "react";
import "./shop.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useColorMode } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import toast, { Toaster } from "react-hot-toast";

const ShopPage = () => {
  let data = [
    {
      id: 1,
      name: "CUP VERBS",
      price: 20,
      images: ["/images/shop.jpg", "/images/shop.jpg", "/images/shop.jpg"],
      sizes: ["S", "MD", "X", "XL"],
    },
    {
      id: 2,
      name: "CUP VERBS",
      price: 20,
      images: ["/images/shop.jpg", "/images/shop.jpg", "/images/shop.jpg"],
      sizes: ["S", "MD", "X", "XL"],
    },
    {
      id: 3,
      name: "CUP VERBS",
      price: 20,
      images: ["/images/shop.jpg", "/images/shop.jpg", "/images/shop.jpg"],
      sizes: ["S", "MD", "X", "XL"],
    },
  ];

  const { colors } = useTheme();

  const { colorMode, toggleColorMode } = useColorMode();

  let [size, setSize] = useState([]);

  const setProductSize = (id, s) => {
    let alreadyAvailable = false;
    size = size.map((item) => {
      if (item.id === id) {
        item.size = s;
        alreadyAvailable = true;
      }
      return item;
    });
    if (!alreadyAvailable) {
      size = [...size, { id: id, size: s }];
    }
    setSize(size);
  };

  const isActiveSize = (id, s) => {
    let activeSize = false;
    for (let i = 0; i < size.length; i++) {
      if (size[i].id === id && size[i].size === s) {
        activeSize = true;
        break;
      } else {
        activeSize = false;
      }
    }
    return activeSize;
  };

  const addToCart = (item) => {
    let selectedSize = size.filter((i) => i.id === item.id);
    if (!selectedSize.length) {
      alert("Please select a size");
      return;
    }
    let oldValue = localStorage.getItem("cartItems");
    let exists = false;
    if (oldValue) {
      oldValue = JSON.parse(oldValue);
      oldValue = oldValue.map((i) => {
        if (i.product_id === item.id && i.size === selectedSize[0].size) {
          i.quantity += 1;
          exists = true;
        }
        return i;
      });
    } else {
      oldValue = [];
    }
    let newValue = exists
      ? [...oldValue]
      : [
          ...oldValue,
          {
            id: Math.floor(Math.random() * 88888888),
            product_id: item.id,
            price: item.price,
            size: selectedSize[0].size,
            quantity: 1,
            image: item.images[0],
          },
        ];
    localStorage.setItem("cartItems", JSON.stringify(newValue));
    toast.success("Product added successfully", {
      position: window.matchMedia("(min-width: 600px)").matches
        ? "bottom-right"
        : "bottom-center",
      style: {
        backgroundColor: "#d9d9d9",
        padding: window.matchMedia("(min-width: 600px)").matches
          ? "20px 30px"
          : "15px 20px",
        fontSize: "14px",
        fontWeight: "bold",
      },
    });
  };

  function getCartData() {
    let cartData = localStorage.getItem("cartItems");
    console.log(JSON.parse(cartData));
  }

  return (
    <>
      <Toaster />
      <div className="container">
        <div className="inner-container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              onClick={getCartData}
              style={{
                padding: "10px 20px",
                backgroundColor: "gray",
                marginBottom: "20px",
              }}
            >
              Get Cart Data
            </button>
          </div>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="card_outer"
                style={
                  colorMode === "light"
                    ? { backgroundColor: colors.light.bgSecondary }
                    : { backgroundColor: colors.dark.bgSecondary }
                }
              >
                <div
                  className="card_main"
                  style={
                    colorMode === "light"
                      ? {
                          backgroundColor: colors.light.bgPrimary,
                          borderColor: colors.light.border,
                        }
                      : {
                          backgroundColor: colors.dark.bgPrimary,
                          borderColor: colors.dark.border,
                        }
                  }
                >
                  <div className="card_first_div">
                    <h2 className="card_first_div_heading">{item.name}</h2>
                    <div className="card_first_div_image_div">
                      <Swiper
                        modules={[Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        className="swiper_container"
                        pagination={{
                          clickable: true,
                          renderBullet: function (index, className) {
                            return `<span class="dot swiper-pagination-bullet"></span>`;
                          },
                        }}
                      >
                        {item.images.map((image, i) => {
                          return (
                            <SwiperSlide key={i}>
                              <Image
                                src={image}
                                alt="shop"
                                width={300}
                                height={300}
                                className="card_first_div_image"
                              />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                  </div>
                  <div className="card_second_div">
                    <p>
                      $ <span>{item.price}</span>
                    </p>
                  </div>
                  <div className="card_third_div">
                    <div className="card_third_div_first">
                      <p>Quantity: </p>
                      <input
                        type="number"
                        style={
                          colorMode === "light"
                            ? { backgroundColor: "lightgrey" }
                            : { backgroundColor: "white" }
                        }
                      />
                    </div>
                    <div className="card_third_div_second">
                      <p>T-Shirt</p>
                      <div className="sizes_main">
                        <p>SIZE:</p>
                        <div style={{ display: "flex", gap: "10px" }}>
                          {item.sizes.map((s, i) => {
                            return (
                              <div
                                key={i}
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  borderRadius: "10px",
                                  cursor: "pointer",
                                  backgroundColor: isActiveSize(item.id, s)
                                    ? "lightslategray"
                                    : "lightgray",
                                }}
                                onClick={() => setProductSize(item.id, s)}
                              >
                                {s}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="card_third_div_third">
                      <button onClick={() => addToCart(item)}>
                        add to basket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShopPage;
