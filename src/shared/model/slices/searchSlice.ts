import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISearchResponse} from "../../api/types.ts";

export enum Filters {
    ARTISTS,
    TRACKS,
    ALBUMS
}
interface SearchState {
    searchResults: ISearchResponse;
    searchRequest: string;
    searchFilter: Filters;
}

const initialState: SearchState = {
    searchResults: {} as ISearchResponse,
    searchRequest: '',
    searchFilter: Filters.ARTISTS,
}
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchResults: (state = initialState, action: PayloadAction<ISearchResponse>) => {
            state.searchResults = action.payload
        },
        setSearchRequest: (state = initialState, action: PayloadAction<string>) => {
            state.searchRequest = action.payload
        },
        setSearchFilter: (state = initialState, action: PayloadAction<Filters>) => {
            state.searchFilter = action.payload
        }
    }
})
export const {setSearchResults, setSearchRequest, setSearchFilter} = searchSlice.actions
export default searchSlice.reducer