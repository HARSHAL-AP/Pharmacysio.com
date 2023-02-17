import React from 'react'
import "./Farmerp.css"
import {Navbar} from "../../Components/Navbar/Navbar"
import {Fotter} from "../../Components/Fotter/Fotter"
import {Farpcard} from "./Farpcard"

export const Farmerpro = () => {
  const arr=[
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109022.jpg",
     "discount": "32%",
     "title": "Starfresh Tomato",
     "price": "₹25.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109006.jpg",
     "discount": "45%",
     "title": "Starfresh Onion Red",
     "price": "₹21.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ106728.jpg",
     "discount": "44%",
     "title": "Star Coriander Bunch",
     "price": "₹10.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ101374.jpg",
     "discount": "33%",
     "title": "Star Cabbage",
     "price": "₹12.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ101373.jpg",
     "discount": "48%",
     "title": "Star Cauliflower 1 Pc",
     "price": "₹26.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109019.jpg",
     "discount": "41%",
     "title": "Starfresh Potato",
     "price": "₹24.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ105228.jpg",
     "discount": "57%",
     "title": "Star Spinach Bunch",
     "price": "₹10.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109015.jpg",
     "discount": "50%",
     "title": "Starfresh Ginger",
     "price": "₹9.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ106729.jpg",
     "discount": "33%",
     "title": "Star Methi Leaves Bunch",
     "price": "₹14.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109018.jpg",
     "discount": "21%",
     "title": "Starfresh Lemon (5-7 Pcs)",
     "price": "₹22.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109056.jpg",
     "discount": "33%",
     "title": "Starfresh Capsicum Green",
     "price": "₹12.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114254.jpg",
     "discount": "17%",
     "title": "Starfresh Bottle Guard",
     "price": "₹19.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ106742.jpg",
     "discount": "33%",
     "title": "Star Button Mushroom Prepacked",
     "price": "₹32.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ106730.jpg",
     "discount": "39%",
     "title": "Star Coconut",
     "price": "₹20.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109082.jpg",
     "discount": "35%",
     "title": "Starfresh Pumpkin Red",
     "price": "₹11.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109011.jpg",
     "discount": "36%",
     "title": "Starfresh Green Chilli Dark",
     "price": "₹9.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ106871.jpg",
     "discount": "33%",
     "title": "Star Sweet Corn Prepacked",
     "price": "₹14.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ100249.jpg",
     "discount": "16%",
     "title": "Starfresh Apple Shimla",
     "price": "₹125.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ161295.jpg",
     "discount": "19%",
     "title": "Starfresh Broccoli",
     "price": "₹29.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109037.jpg",
     "discount": 0.02,
     "title": "Starfresh Beetroot",
     "price": "₹9.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109007.jpg",
     "discount": "44%",
     "title": "Starfresh Onion Red",
     "price": "₹42.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109167.jpg",
     "discount": "36%",
     "title": "Starfresh French Bush Beans",
     "price": "₹14.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109374.jpg",
     "discount": "43%",
     "title": "Starfresh Watermelon Sugar Queen",
     "price": "₹44.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ152918.jpg",
     "discount": "42%",
     "title": "Star Potato Prepacked",
     "price": "₹42.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ112210.jpg",
     "discount": "50%",
     "title": "Star Grapes Sonaka Green Prem..",
     "price": "₹39.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ105237.jpg",
     "discount": "36%",
     "title": "Star Mint Leaves Bunch",
     "price": "₹9.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109069.jpg",
     "discount": "22%",
     "title": "Starfresh Cucumber White",
     "price": "₹14.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114256.jpg",
     "discount": "21%",
     "title": "Starfresh Brinjal Bharta",
     "price": "₹27.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109004.jpg",
     "discount": "32%",
     "title": "Starfresh Bhindi",
     "price": "₹23.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109016.jpg",
     "discount": "48%",
     "title": "Starfresh Ginger",
     "price": "₹23.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109039.jpg",
     "discount": "43%",
     "title": "Starfresh Bitter Gourd Green",
     "price": "₹16.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114325.jpg",
     "discount": "42%",
     "title": "Star Onion Prepacked",
     "price": "₹95.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109162.jpg",
     "discount": "41%",
     "title": "Starfresh Green Chilli Light",
     "price": "₹10.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ112208.jpg",
     "discount": "53%",
     "title": "Star Grapes Sharad Premium",
     "price": "₹49.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109017.jpg",
     "discount": "18%",
     "title": "Starfresh Lemon (2-3 Pcs)",
     "price": "₹9.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ108374.jpg",
     "discount": "50%",
     "title": "Star Spring Onion Prepacked",
     "price": "₹12.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109024.jpg",
     "discount": "32%",
     "title": "Starfresh Tomato",
     "price": "₹49.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ105232.jpg",
     "discount": "33%",
     "title": "Star Curry Leaves Bunch",
     "price": "₹14.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109527.jpg",
     "discount": "30%",
     "title": "Starfresh Orange Kinnow",
     "price": "₹82.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109005.jpg",
     "discount": "33%",
     "title": "Starfresh Bhindi",
     "price": "₹45.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109057.jpg",
     "discount": "33%",
     "title": "Starfresh Capsicum Green",
     "price": "₹24.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109123.jpg",
     "discount": "48%",
     "title": "Starfresh Garlic",
     "price": "₹23.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ162132.jpg",
     "discount": "27%",
     "title": "Starfresh Banana Robusta About",
     "price": "₹22.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109050.jpg",
     "discount": "7%",
     "title": "Starfresh Brinjal Violet Small",
     "price": "₹13.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109009.jpg",
     "discount": "35%",
     "title": "Starfresh Carrot Orange (Bangalore)",
     "price": "₹13.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ106873.jpg",
     "discount": "33%",
     "title": "Star Baby Corn Peeled Prepack..",
     "price": "₹24.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109074.jpg",
     "discount": "42%",
     "title": "Starfresh Green Peas",
     "price": "₹22.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109168.jpg",
     "discount": "36%",
     "title": "Starfresh French Bush Beans",
     "price": "₹28.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111726.jpg",
     "discount": "16%",
     "title": "Starfresh Tomato Country",
     "price": "₹31.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109526.jpg",
     "discount": "29%",
     "title": "Starfresh Orange Kinnow",
     "price": "₹65.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109034.jpg",
     "discount": "32%",
     "title": "Starfresh Beans Cluster",
     "price": "₹25.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ153300.jpg",
     "discount": "33%",
     "title": "Dream Farm Lettuce Iceberg",
     "price": "₹22.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109118.jpg",
     "discount": "25%",
     "title": "Starfresh Capsicum Yellow",
     "price": "₹66.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109020.jpg",
     "discount": "43%",
     "title": "Starfresh Potato",
     "price": "₹47.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ161532.jpg",
     "discount": "36%",
     "title": "Starfresh Muskmelon Chandani About",
     "price": "₹29.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109058.jpg",
     "discount": "17%",
     "title": "Starfresh Cucumber Green",
     "price": "₹52.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109116.jpg",
     "discount": "25%",
     "title": "Starfresh Capsicum Red",
     "price": "₹66.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109061.jpg",
     "discount": "32%",
     "title": "Starfresh Coccinea",
     "price": "₹28.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109038.jpg",
     "title": "Starfresh Beetroot",
     "price": "₹18.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ102252.jpg",
     "discount": "33%",
     "title": "Star Garlic Peeled Prepacked",
     "price": "₹24.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109070.jpg",
     "discount": "24%",
     "title": "Starfresh Cucumber White",
     "price": "₹28.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109099.jpg",
     "discount": "67%",
     "title": "Starfresh Sweet Potato",
     "price": "₹23.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ108376.jpg",
     "discount": "42%",
     "title": "Star Onion Prepacked",
     "price": "₹38.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111717.jpg",
     "discount": "35%",
     "title": "Starfresh Shalajam (Turnip)",
     "price": "₹13.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109036.jpg",
     "discount": "5%",
     "title": "Starfresh Beetroot",
     "price": "₹35.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109515.jpg",
     "discount": "24%",
     "title": "Star Gooseberry (Amla Big) Pr..",
     "price": "₹47.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ102873.jpg",
     "discount": "28%",
     "title": "Star Dragon Fruit",
     "price": "₹79.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109032.jpg",
     "discount": "52%",
     "title": "Starfresh Beans Broad (Ghevada)",
     "price": "₹14.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109060.jpg",
     "discount": "21%",
     "title": "Starfresh Cucumber Green",
     "price": "₹26.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109010.jpg",
     "discount": "35%",
     "title": "Starfresh Carrot Orange (Bangalore)",
     "price": "₹26.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109066.jpg",
     "discount": "36%",
     "title": "Starfresh Beans Cowpea",
     "price": "₹16.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109131.jpg",
     "discount": "55%",
     "title": "Starfresh Sapota Round",
     "price": "₹32.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109372.jpg",
     "discount": "31%",
     "title": "Starfresh Pomegranate Red",
     "price": "₹162.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ155008.jpg",
     "discount": "33%",
     "title": "Star Baby Potato Prepacked",
     "price": "₹24.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ150298.jpg",
     "discount": "15%",
     "title": "Starfresh Bottle Guard",
     "price": "₹28.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ156538.jpg",
     "discount": "52%",
     "title": "Star Grapes Red ( Flame)",
     "price": "₹65.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109012.jpg",
     "discount": "39%",
     "title": "Starfresh Green Chilli Dark",
     "price": "₹22.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ105235.jpg",
     "discount": "33%",
     "title": "Star Amaranthus Red Leaves Bu..",
     "price": "₹16.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109122.jpg",
     "discount": "44%",
     "title": "Starfresh Garlic",
     "price": "₹10.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109362.jpg",
     "discount": "35%",
     "title": "Starfresh Banana Yellaki",
     "price": "₹126.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109358.jpg",
     "discount": "29%",
     "title": "Starfresh Banana Robusta",
     "price": "₹40.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ106737.jpg",
     "discount": "33%",
     "title": "Star Mix Sprout Prepacked",
     "price": "₹30.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109114.jpg",
     "discount": "47%",
     "title": "Starfresh Chilli Pikador Green",
     "price": "₹9.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109124.jpg",
     "discount": "47%",
     "title": "Starfresh Garlic",
     "price": "₹46.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111695.jpg",
     "discount": "29%",
     "title": "Starfresh Guava Red",
     "price": "₹65.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109068.jpg",
     "discount": "22%",
     "title": "Starfresh Cucumber White",
     "price": "₹56.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109096.jpg",
     "discount": "27%",
     "title": "Starfresh Sponge Gourd",
     "price": "₹32.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109513.jpg",
     "discount": "23%",
     "title": "Starfresh Fresh Fig",
     "price": "₹69.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109104.jpg",
     "discount": "27%",
     "title": "Starfresh Yam (Suran)",
     "price": "₹19.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109289.jpg",
     "discount": "43%",
     "title": "Starfresh Mini Bitter Gourd",
     "price": "₹16.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109030.jpg",
     "discount": "40%",
     "title": "Starfresh Beans Broad (Valor Papad..",
     "price": "₹12.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ106860.jpg",
     "discount": "40%",
     "title": "Star Pineapple Large",
     "price": "₹52.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109081.jpg",
     "discount": "33%",
     "title": "Starfresh Pumpkin Red",
     "price": "₹6.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ112166.jpg",
     "discount": "47%",
     "title": "Starfresh Cherry Tomatoes",
     "price": "₹16.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109051.jpg",
     "title": "Starfresh Brinjal Violet Small",
     "price": "₹26.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109377.jpg",
     "discount": "48%",
     "title": "Starfresh Papaya Disco",
     "price": "₹76.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109098.jpg",
     "discount": "67%",
     "title": "Starfresh Sweet Potato",
     "price": "₹12.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109510.jpg",
     "discount": "34%",
     "title": "Star Bhindi Prepacked",
     "price": "₹49.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ150304.jpg",
     "discount": "42%",
     "title": "Starfresh Watermelon Sugar Queen",
     "price": "₹73.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ161574.jpg",
     "discount": "43%",
     "title": "Starfresh Grapes Black Jumbo",
     "price": "₹65.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ112207.jpg",
     "discount": "50%",
     "title": "Star Blueberry Prepacked",
     "price": "₹149.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111718.jpg",
     "discount": "34%",
     "title": "Starfresh Shalajam (Turnip)",
     "price": "₹25.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109045.jpg",
     "discount": "52%",
     "title": "Starfresh Brinjal Round Green",
     "price": "₹11.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109105.jpg",
     "discount": "29%",
     "title": "Starfresh Yam (Suran)",
     "price": "₹37.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109025.jpg",
     "discount": "25%",
     "title": "Starfresh Zucchini Green",
     "price": "₹33.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109089.jpg",
     "discount": "47%",
     "title": "Starfresh Ridge Gourd",
     "price": "₹19.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109143.jpg",
     "discount": "36%",
     "title": "Starfresh Indian Jumbo Guava 2 Pcs",
     "price": "₹69.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109048.jpg",
     "discount": "47%",
     "title": "Starfresh Brinjal Kateri",
     "price": "₹26.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109095.jpg",
     "discount": "27%",
     "title": "Starfresh Sponge Gourd",
     "price": "₹16.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ160805.jpg",
     "discount": "35%",
     "title": "Starfresh Apple Red Delicious Iran",
     "price": "₹160.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111727.jpg",
     "discount": "15%",
     "title": "Starfresh Tomato Country",
     "price": "₹61.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109059.jpg",
     "discount": "24%",
     "title": "Starfresh Cucumber Green",
     "price": "₹13.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109174.jpg",
     "discount": "45%",
     "title": "Starfresh Tomato Raw",
     "price": "₹12.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114255.jpg",
     "discount": "13%",
     "title": "Starfresh Bottle Guard",
     "price": "₹40.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109055.jpg",
     "discount": "32%",
     "title": "Starfresh Capsicum Green",
     "price": "₹47.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109368.jpg",
     "discount": "41%",
     "title": "Starfresh Sweet Lime",
     "price": "₹128.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ156539.jpg",
     "discount": "38%",
     "title": "Star Golden Berry Prepacked",
     "price": "₹79.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ106745.jpg",
     "discount": "34%",
     "title": "Star Green Tea (Lemon Grass) ..",
     "price": "₹19.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114257.jpg",
     "discount": "19%",
     "title": "Starfresh Brinjal Bharta",
     "price": "₹54.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ162306.jpg",
     "discount": "54%",
     "title": "Starfresh Imported Lemon",
     "price": "₹19.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ105236.jpg",
     "discount": "34%",
     "title": "Star Dill Leaves Bunch",
     "price": "₹21.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ162129.jpg",
     "discount": "7%",
     "title": "Starfresh Fresh Turmeric Loose",
     "price": "₹36.27"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109040.jpg",
     "discount": "40%",
     "title": "Starfresh Bitter Gourd Green",
     "price": "₹32.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109031.jpg",
     "discount": "39%",
     "title": "Starfresh Beans Broad (Valor Papad..",
     "price": "₹23.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109028.jpg",
     "discount": "36%",
     "title": "Starfresh Banana Raw",
     "price": "₹23.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ161290.jpg",
     "discount": "34%",
     "title": "Starfresh Kiwi Green 3 Pcs About",
     "price": "₹99.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109090.jpg",
     "discount": "48%",
     "title": "Starfresh Ridge Gourd",
     "price": "₹37.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109147.jpg",
     "discount": "30%",
     "title": "Starfresh Arvi",
     "price": "₹37.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109161.jpg",
     "discount": "56%",
     "title": "Starfresh Mango Raw (Kairi)",
     "price": "₹65.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109525.jpg",
     "discount": "35%",
     "title": "Starfresh Imported Apples Royal Ga..",
     "price": "₹203.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ163172.jpg",
     "discount": "28%",
     "title": "Starfresh Tomato",
     "price": "₹13.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109369.jpg",
     "discount": "31%",
     "title": "Starfresh Orange Nagpur",
     "price": "₹70.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109117.jpg",
     "discount": "24%",
     "title": "Starfresh Capsicum Red",
     "price": "₹132.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109021.jpg",
     "discount": "43%",
     "title": "Starfresh Potato",
     "price": "₹116.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109062.jpg",
     "discount": "33%",
     "title": "Starfresh Coccinea",
     "price": "₹56.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109135.jpg",
     "discount": "24%",
     "title": "Starfresh Indian Avocado",
     "price": "₹175.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ150300.jpg",
     "discount": "40%",
     "title": "Starfresh Drumstick",
     "price": "₹43.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114294.jpg",
     "discount": "52%",
     "title": "Starfresh Knol Knol",
     "price": "₹11.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109092.jpg",
     "discount": "45%",
     "title": "Starfresh Snake Gourd",
     "price": "₹16.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114343.jpg",
     "discount": "33%",
     "title": "Star Moong Sprout Prepacked",
     "price": "₹30.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ105234.jpg",
     "discount": "33%",
     "title": "Star Amaranthus Green Leaves ..",
     "price": "₹14.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ108386.jpg",
     "discount": "48%",
     "title": "Starfresh Tomato",
     "price": "₹22.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109008.jpg",
     "discount": "36%",
     "title": "Starfresh Carrot Orange (Bangalore)",
     "price": "₹51.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ105231.jpg",
     "discount": "33%",
     "title": "Star Colocassia Leaves Bunch",
     "price": "₹14.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109373.jpg",
     "discount": "50%",
     "title": "Starfresh Papaya Raw Loose",
     "price": "₹37.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109163.jpg",
     "discount": "44%",
     "title": "Starfresh Green Chilli Light",
     "price": "₹23.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109035.jpg",
     "discount": "34%",
     "title": "Starfresh Beans Cluster",
     "price": "₹49.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109101.jpg",
     "discount": "35%",
     "title": "Starfresh Tinda",
     "price": "₹26.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109130.jpg",
     "discount": "59%",
     "title": "Starfresh Sapota Round",
     "price": "₹57.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ115187.jpg",
     "discount": "51%",
     "title": "Star Muskmelon Kundan",
     "price": "₹90.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109033.jpg",
     "discount": "51%",
     "title": "Starfresh Beans Broad (Ghevada)",
     "price": "₹28.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109371.jpg",
     "discount": "31%",
     "title": "Starfresh Pomegranate Red",
     "price": "₹137.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109367.jpg",
     "discount": "41%",
     "title": "Starfresh Sweet Lime",
     "price": "₹85.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114342.jpg",
     "discount": "33%",
     "title": "Star Matki Sprout Prepacked",
     "price": "₹30.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114326.jpg",
     "discount": "47%",
     "title": "Starfresh Onion Sambhar",
     "price": "₹32.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ153281.jpg",
     "discount": "25%",
     "title": "Star Avacado Hass Imported",
     "price": "₹169.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109094.jpg",
     "discount": "26%",
     "title": "Starfresh Sponge Gourd",
     "price": "₹64.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109112.jpg",
     "discount": "36%",
     "title": "Starfresh Zucchini Yellow",
     "price": "₹79.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ106738.jpg",
     "discount": "33%",
     "title": "Star Moong & Matki Sprout Pre..",
     "price": "₹30.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ112218.jpg",
     "discount": "33%",
     "title": "Star Aloe Vera",
     "price": "₹24.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ150305.jpg",
     "discount": "36%",
     "title": "Starfresh Banana Raw",
     "price": "₹18.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ162113.jpg",
     "discount": "7%",
     "title": "Starfresh Onion White Loose",
     "price": "₹42.78"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111696.jpg",
     "discount": "29%",
     "title": "Starfresh Guava Red",
     "price": "₹129.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109067.jpg",
     "discount": "35%",
     "title": "Starfresh Beans Cowpea",
     "price": "₹32.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109148.jpg",
     "discount": "32%",
     "title": "Starfresh Arvi",
     "price": "₹73.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ162307.jpg",
     "discount": "55%",
     "title": "Starfresh Imported Lemon",
     "price": "₹37.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109111.jpg",
     "discount": "48%",
     "title": "Starfresh Cucumber Madras",
     "price": "₹43.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109290.jpg",
     "discount": "40%",
     "title": "Starfresh Mini Bitter Gourd",
     "price": "₹32.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ163279.jpg",
     "discount": "35%",
     "title": "Starfresh Orange Navel",
     "price": "₹106.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109029.jpg",
     "discount": "35%",
     "title": "Starfresh Banana Raw",
     "price": "₹45.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109136.jpg",
     "discount": "25%",
     "title": "Starfresh Indian Avocado",
     "price": "₹249.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ150301.jpg",
     "discount": "48%",
     "title": "Starfresh Papaya Disco",
     "price": "₹76.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109115.jpg",
     "discount": "48%",
     "title": "Starfresh Chilli Pikador Green",
     "price": "₹21.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ106743.jpg",
     "discount": "34%",
     "title": "Star Oyster Mushroom Fresh Pr..",
     "price": "₹85.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109097.jpg",
     "discount": "67%",
     "title": "Starfresh Sweet Potato",
     "price": "₹45.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ162131.jpg",
     "discount": "35%",
     "title": "Starfresh Mandarin Orange Imported..",
     "price": "₹213.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ100245.jpg",
     "discount": "33%",
     "title": "Star Apple Granny Smith Prepa..",
     "price": "₹169.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109027.jpg",
     "discount": "36%",
     "title": "Starfresh Banana Raw",
     "price": "₹9.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109087.jpg",
     "discount": "27%",
     "title": "Starfresh Ash Gourd",
     "price": "₹49.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109093.jpg",
     "discount": "44%",
     "title": "Starfresh Snake Gourd",
     "price": "₹32.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ150306.jpg",
     "discount": "36%",
     "title": "Starfresh Banana Raw",
     "price": "₹38.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109119.jpg",
     "discount": "24%",
     "title": "Starfresh Capsicum Yellow",
     "price": "₹132.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ161575.jpg",
     "discount": "44%",
     "title": "Starfresh Grapes Black Jumbo",
     "price": "₹129.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114295.jpg",
     "discount": "54%",
     "title": "Starfresh Knol Knol",
     "price": "₹21.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109003.jpg",
     "discount": "31%",
     "title": "Starfresh Bhindi",
     "price": "₹90.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109046.jpg",
     "discount": "52%",
     "title": "Starfresh Brinjal Round Green",
     "price": "₹22.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109102.jpg",
     "discount": "35%",
     "title": "Starfresh Tinda",
     "price": "₹51.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109175.jpg",
     "discount": "48%",
     "title": "Starfresh Tomato Raw",
     "price": "₹23.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114268.jpg",
     "discount": "42%",
     "title": "Starfresh Chow Chow",
     "price": "₹21.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109026.jpg",
     "discount": "24%",
     "title": "Starfresh Zucchini Green",
     "price": "₹65.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109103.jpg",
     "discount": "30%",
     "title": "Starfresh Yam (Suran)",
     "price": "₹74.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109516.jpg",
     "discount": "47%",
     "title": "Starfresh Mulberry Pc",
     "price": "₹79.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109528.jpg",
     "discount": "35%",
     "title": "Starfresh Groundnut (Moongfali) Pa..",
     "price": "₹94.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109084.jpg",
     "discount": "38%",
     "title": "Starfresh Pumpkin Disco (Small)",
     "price": "₹32.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ163280.jpg",
     "discount": "35%",
     "title": "Starfresh Orange Navel",
     "price": "₹53.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109359.jpg",
     "discount": "29%",
     "title": "Starfresh Banana Robusta",
     "price": "₹78.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109540.jpg",
     "discount": "35%",
     "title": "Starfresh Ber Apple",
     "price": "₹75.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111692.jpg",
     "discount": "25%",
     "title": "Starfresh Green Grapes Sonaka Regu..",
     "price": "₹41.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114269.jpg",
     "discount": "40%",
     "title": "Starfresh Chow Chow",
     "price": "₹43.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109085.jpg",
     "discount": "25%",
     "title": "Starfresh Ash Gourd",
     "price": "₹97.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109086.jpg",
     "discount": "26%",
     "title": "Starfresh Ash Gourd",
     "price": "₹25.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109142.jpg",
     "discount": "37%",
     "title": "Starfresh Indian Jumbo Guava 4 Pcs",
     "price": "₹128.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114327.jpg",
     "discount": "47%",
     "title": "Starfresh Onion Sambhar",
     "price": "₹63.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ151305.jpg",
     "discount": "31%",
     "title": "Starfresh Pomegranate Red Pack Of 4",
     "price": "₹273.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ151310.jpg",
     "discount": "36%",
     "title": "Starfresh Banana Raw Loose",
     "price": "₹36.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114293.jpg",
     "discount": "34%",
     "title": "Starfresh Kiwi Zespri Golden",
     "price": "₹129.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ161585.jpg",
     "discount": "33%",
     "title": "Starfresh Watermelon Devyani (Yell..",
     "price": "₹81.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109506.jpg",
     "discount": "22%",
     "title": "Starfresh Woodapple (Bel)",
     "price": "₹18.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109088.jpg",
     "discount": "47%",
     "title": "Starfresh Ridge Gourd",
     "price": "₹74.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109370.jpg",
     "discount": "31%",
     "title": "Starfresh Orange Nagpur",
     "price": "₹141.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ151309.jpg",
     "discount": "36%",
     "title": "Starfresh Banana Raw Loose",
     "price": "₹18.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ151311.jpg",
     "discount": "35%",
     "title": "Starfresh Banana Raw Loose",
     "price": "₹54.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109044.jpg",
     "discount": "53%",
     "title": "Starfresh Brinjal Round Green",
     "price": "₹43.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ155004.jpg",
     "discount": "30%",
     "title": "Star Crimson Seedless Grapes ..",
     "price": "₹89.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ162114.jpg",
     "discount": "7%",
     "title": "Starfresh Onion White Loose",
     "price": "₹85.56"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114296.jpg",
     "discount": "54%",
     "title": "Starfresh Knol Knol",
     "price": "₹42.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109047.jpg",
     "discount": "48%",
     "title": "Starfresh Brinjal Kateri",
     "price": "₹51.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109091.jpg",
     "discount": "44%",
     "title": "Starfresh Snake Gourd",
     "price": "₹64.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109113.jpg",
     "discount": "36%",
     "title": "Starfresh Zucchini Yellow",
     "price": "₹158.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ150303.jpg",
     "discount": "49%",
     "title": "Starfresh Cucumber Madras",
     "price": "₹58.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ160806.jpg",
     "discount": "35%",
     "title": "Starfresh Apple Red Delicious Iran",
     "price": "₹319.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ161576.jpg",
     "discount": "44%",
     "title": "Starfresh Grapes Black Jumbo",
     "price": "₹193.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ162130.jpg",
     "discount": "7%",
     "title": "Starfresh Fresh Turmeric Loose",
     "price": "₹72.54"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109524.jpg",
     "discount": "36%",
     "title": "Starfresh Muskmellon Sun",
     "price": "₹78.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111700.jpg",
     "discount": "56%",
     "title": "Starfresh Jackfruit Small",
     "price": "₹129.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ114328.jpg",
     "discount": "47%",
     "title": "Starfresh Onion Sambhar",
     "price": "₹126.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ150302.jpg",
     "discount": "39%",
     "title": "Starfresh Pumpkin Disco",
     "price": "₹64.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ151315.jpg",
     "discount": "39%",
     "title": "Starfresh Pumpkin Disco (Small)",
     "price": "₹76.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ161584.jpg",
     "discount": "35%",
     "title": "Starfresh Watermelon Vishala (Yell..",
     "price": "₹103.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111693.jpg",
     "discount": "25%",
     "title": "Starfresh Green Grapes Sonaka Regu..",
     "price": "₹81.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111694.jpg",
     "discount": "26%",
     "title": "Starfresh Green Grapes Sonaka Regu..",
     "price": "₹121.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109110.jpg",
     "discount": "48%",
     "title": "Starfresh Cucumber Madras",
     "price": "₹85.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ115099.jpg",
     "discount": "33%",
     "title": "Star Chinese Cabbage About 80..",
     "price": "₹90.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109520.jpg",
     "discount": "31%",
     "title": "Starfresh Carrot Red",
     "price": "₹18.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109521.jpg",
     "discount": "31%",
     "title": "Starfresh Carrot Red",
     "price": "₹35.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ105230.jpg",
     "discount": "44%",
     "title": "Star Radish White Prepacked",
     "price": "₹10.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109073.jpg",
     "discount": "43%",
     "title": "Starfresh Green Peas",
     "price": "₹43.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111722.jpg",
     "discount": "14%",
     "title": "Starfresh Spring Garlic",
     "price": "₹12.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ105761.jpg",
     "discount": "26%",
     "title": "Starfresh Muskmelon Bobby",
     "price": "₹53.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109083.jpg",
     "discount": "47%",
     "title": "Starfresh Pumpkin Disco (Small)",
     "price": "₹16.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ109023.jpg",
     "title": "Starfresh Tomato",
     "price": "₹7.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111781.jpg",
     "discount": "12%",
     "title": "Starfresh Mango Badam",
     "price": "₹59.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111782.jpg",
     "discount": "11%",
     "title": "Starfresh Mango Badam",
     "price": "₹117.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111783.jpg",
     "discount": "11%",
     "title": "Starfresh Mango Badam",
     "price": "₹234.00"
    },
    {
     "image": "https:\/\/media.starquik.com\/catalog\/product\/SQ111784.jpg",
     "discount": "12%",
     "title": "Starfresh Mango Badam",
     "price": "₹584.00"
    }
   ]
  return (
    <>
    <Navbar/>



    <div className='probody'>
    {arr.map((e,index)=>{
return <Farpcard key={index} obj={e}/>



     })}
    </div>
   
    <Fotter/>
    </>
    
  )
}
