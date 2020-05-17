import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = styled.input`
  display: inline-block;
  width: 100%;
  font-family: inherit;
  margin: 0;
  padding: 0.4rem 0.5rem;
  font-size: 0.8rem;
  outline: none;
  border: 2px solid transparent;
  resize: none;
  overflow: hidden;
  text-transform: capitalize;
  &:focus,
  :active {
    border-bottom: 2px solid blue;
  }
`;

const NumImagesWrapper = styled.div`
  font-size: 0.8rem;
  width: 225px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding-left: 0.5rem;
`;

const Select = styled.select`
  cursor: pointer;
  outline: none;
  border: 1px solid lightblue;
  &:hover {
    border: 2px solid blue;
  }
`;

const Search = ({ onThumbnailClick, index, images, setImages }) => {
  const [searchText, setSearchText] = useState("");
  const [amount, setAmount] = useState(8);
  const [apiUrl, setapiUrl] = useState("https://pixabay.com/api");
  const [apiKey, setApiKey] = useState("16558152-3176fcb55cc0d903f3996aaf1");

  //get images from from pixabay based on input text
  const search = (numImages, text) => {
    if (searchText.length > 1)
      fetch(
        `${apiUrl}/?key=${apiKey}&q=${text}&image_type=photo&per_page=${numImages}&orientation=horizontal`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // Work with JSON data here
          setImages(data.hits);
        })
        .catch((err) => {
          // Do something for an error here
          console.log(err);
        });
    setImages([]);
    console.log(
      `${apiUrl}/?key=${apiKey}&q=${text}&image_type=photo&per_page=${numImages}&orientation=horizontal`
    );
  };

  const onTextChange = (e) => {
    let text = e.target.value;
    setSearchText(text);
    search(amount, text);
  };

  const onAmountChange = (e) => {
    let num = parseInt(e.target.value);
    setAmount(num);
    search(num, searchText);
  };

  console.log(amount);
  return (
    <>
      <SearchBar
        onChange={onTextChange}
        placeholder="Search For Images"
        value={searchText}
      />
      <NumImagesWrapper>
        <label>Number of photos to display</label>
        <Select
          id="demo-simple-select"
          value={amount}
          onChange={onAmountChange}
        >
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={16}>16</option>
          <option value={32}>32</option>
        </Select>
      </NumImagesWrapper>
    </>
  );
};

export default Search;
