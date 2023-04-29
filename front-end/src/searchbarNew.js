import React from 'react';
import { AutoComplete, Input } from 'antd';

const { Search } = Input;

function SearchBar({ onSearch, onSelect, options }) {
  return (
    <AutoComplete
      options={options}
      onSelect={onSelect}
      style={{ width: '100%' }}
    >
      <Search
        placeholder="Search..."
        enterButton="Search"
        onSearch={onSearch}
        size="large"
        style={{ border: 'none', outline: 'none' }}
      />
    </AutoComplete>
  );
}

export default SearchBar;

////////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import { Layout } from 'antd';
import axios from 'axios';
import HeaderComponent from './components/Header';
import SearchBar from './components/SearchBar';
import Recipe from './components/Recipe';
import FooterComponent from './components/Footer';

const { Content } = Layout;

function HomePage() {
  // ... (keep the existing state variables and functions)

  const [validTitleSelected, setValidTitleSelected] = useState(false);
  const [searchOptions, setSearchOptions] = useState([]);

  const handleTitleSearch = async (value) => {
    if (value === '') {
      setSearchOptions([]);
      setValidTitleSelected(false);
      return;
    }

    // Replace this with an API call to get the titles containing the search value.
    // For now, I'm using dummy data
    const dummyData = [
      { value: 'Spaghetti Bolognese' },
      { value: 'Pizza Margherita' },
    ];

    setSearchOptions(dummyData);
  };

  const handleTitleSelect = (value) => {
    // Check if the selected title exists in the dataset (replace with actual check)
    const titleExists = true;
    if (titleExists) {
      setValidTitleSelected(true);
    } else {
      setValidTitleSelected(false);
    }
  };

  const handleSearch = async () => {
    if (!validTitleSelected) {
      return;
    }

    // ... (keep the existing handleSearch function)
  };

  return (
    <Layout>
      <HeaderComponent />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ paddingTop: '20px' }}>
          <SearchBar
            onSearch={handleTitleSearch}
            onSelect={handleTitleSelect}
            options={searchOptions}
          />
          {showSearchResults &&
            // ... (keep the existing content)
          }
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
}

export default HomePage;
/////////////////////////////////////////////////////////////////////////////////////////

import Papa from 'papaparse';

const readCSVFile = async (filename) => {
  return new Promise((resolve, reject) => {
    Papa.parse(filename, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

export default readCSVFile;

//////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import axios from 'axios';
import HeaderComponent from './components/Header';
import SearchBar from './components/SearchBar';
import Recipe from './components/Recipe';
import FooterComponent from './components/Footer';
import readCSVFile from './helpers/readCSVFile';

const { Content } = Layout;

function HomePage() {
  // ... (keep the existing state variables and functions)

  const [validTitleInput, setValidTitleInput] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await readCSVFile('/data/recipes.csv');
      setValidTitleInput(data);
    };
    fetchData();
  }, []);

  const handleTitleSearch = async (value) => {
    if (value === '') {
      setSearchOptions([]);
      setValidTitleSelected(false);
      return;
    }

    const filteredTitles = validTitleInput
      .filter((recipe) =>
        recipe.Title.toLowerCase().includes(value.toLowerCase())
      )
      .map((recipe) => ({ value: recipe.Title }));

    setSearchOptions(filteredTitles);
  };

  const handleTitleSelect = (value) => {
    const titleExists = validTitleInput.some((recipe) => recipe.Title === value);
    if (titleExists) {
      setValidTitleSelected(true);
    } else {
      setValidTitleSelected(false);
    }
  };

  // ... (keep the rest of the HomePage component)

  return (
    // ... (keep the existing return statement)
  );
}

export default HomePage;

/////////////////////////////////////////////////////////////////////////////////////////

