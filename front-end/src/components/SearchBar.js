// source: https://www.youtube.com/watch?v=HTf9Xdz3udw&t=2s&ab_channel=CodeWithAamir
// source: https://www.youtube.com/watch?v=or7amkb0Pk8&ab_channel=EricMurphy
// source: https://www.youtube.com/watch?v=Hn6TqgzQbaE&ab_channel=CodeWithVishal

import React, { useEffect, useState } from "react";
import { AutoComplete, Row, Col, Button} from "antd";
import foodTitlesPath from "../data/Food-Title.txt";
import { Icon } from '@iconify/react';

function SearchBar({ onSelect }) {
  const [foodTitles, setFoodTitles] = useState([]);

  // Fetch food titles from the text file
  useEffect(() => {
    fetch(foodTitlesPath)
      .then((response) => response.text())
      .then((text) => {
        const titles = text.split("\n").map((title) => title.trim());
        setFoodTitles(titles);
      });
  }, []);

  // Convert the food titles to the correct format for the AutoComplete options
  const options = foodTitles.map((title) => ({ value: title }));

  const handleSelect = (value) => {
    onSelect(value);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Row justify="center">
      <Col>
        <div style={{ width: "400px" }}>
          <AutoComplete
            style={{ width: "100%" }}
            placeholder="Type the Title of Food you want to be recommended..."
            options={options}
            filterOption={(inputValue, option) =>
              option.value.toLowerCase().includes(inputValue.toLowerCase())
            }
            onSelect={handleSelect}
          />
        </div>
      </Col>
      <Col>
        <Button type="text" onClick={handleRefresh}>
          <Icon icon="mdi:clear-circle" fontSize="24px"/>
        </Button>
      </Col>
    </Row>
  );
}

export default SearchBar;