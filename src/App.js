import React, { useState, useEffect } from 'react'
import './App.css';
import ShopsList from './Components/ShopsList'

const placesList = [
  {
    shopName: "Sample Shop 1",
    stars: 4.5,
    phoneNumber: "0119922334",
    type: "Clothing",
    location: {lat: -31.343, lang: 149.334}
  },
  {
    shopName: "Sample Shop 2",
    stars: 4.5,
    phoneNumber: "0119922334",
    type: "Clothing",
    location: {lat: -31.343, lang: 149.334}
  },
  {
    shopName: "Sample Shop 3",
    stars: 4.5,
    phoneNumber: "0119922334",
    type: "Clothing",
    location: {lat: -31.343, lang: 149.334}
  },
  {
    shopName: "Sample Shop 4",
    stars: 4.5,
    phoneNumber: "0119922334",
    type: "Clothing",
    location: {lat: -31.343, lang: 149.334}
  },
  {
    shopName: "Sample Shop 5",
    stars: 4.5,
    phoneNumber: "0119922334",
    type: "Clothing",
    location: {lat: -31.343, lang: 149.334}
  }
]

function App() {

  const [searchValue, setSearchValue] = useState("");
  const [shops, setShops] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [shopsCount, setShopsCount] = useState(0);

  useEffect(() => {
    setShops(placesList);
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value)
  }

  return (
    <div className="App">
      <h1 className="mx-4">Shops List</h1>
      <div className="mx-4 input-group mb-3">
        <input type="text" style={{width:"200px"}} onChange={(e) => handleSearch(e)} placeholder="Search Text" value={searchValue} className="form-control"></input>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Shop Name</th>
            <th scope="col">Stars</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {/* <Shop props={shops}></Shop> */}
          {
            <ShopsList props={placesList.filter((place) => place.shopName.toLowerCase().includes(searchValue.toLowerCase()))}/>
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
