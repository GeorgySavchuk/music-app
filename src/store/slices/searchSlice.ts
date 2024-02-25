import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISearchResponse} from "../../types/ISearchResponse.ts";
interface SearchState {
    searchResults: ISearchResponse;
    searchRequest: string;
}

const initialState: SearchState = {
    searchResults: {} as ISearchResponse,
    searchRequest: ''
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
        }
    }
})
export const {setSearchResults, setSearchRequest} = searchSlice.actions
export default searchSlice.reducer