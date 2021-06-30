import React from "react";
import algoliasearch from "algoliasearch/lite";

import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import Hit from "../Hit";
import { Wrapper } from "./styles";

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
};

const searchClient = algoliasearch(algolia.appId, algolia.searchKey);

const Search = () => (
  <Wrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      <SearchBox translations={{ placeholder: "Pesquisar..." }} />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </Wrapper>
);

export default Search;
