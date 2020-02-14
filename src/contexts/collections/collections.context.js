import { createContext } from 'react'; //context api is just like redux// in fact redux library leverages context api

import SHOP_DATA from "./shop.data";

const CollectionsContext = createContext(SHOP_DATA); //initial value of context // like redux

export default CollectionsContext;