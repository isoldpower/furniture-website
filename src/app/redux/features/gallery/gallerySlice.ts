import {createSlice, PayloadAction} from "@reduxjs/toolkit/react";
import {GalleryState} from "@/app/redux/features/gallery/types";
import {ProgressiveImageData} from "@/shared/ui";

const initialState: GalleryState = {
    activeImage: {
        high: '',
        low: '',
        alt: 'undefined'
    }
}

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: initialState,
    reducers: {
        setImage: (state: GalleryState, action: PayloadAction<ProgressiveImageData>) => {
            state.activeImage = action.payload
        }
    },
    selectors: {
        selectActiveImage: sliceState => sliceState.activeImage
    }
});


export const {selectActiveImage} = gallerySlice.selectors;
export const {setImage} = gallerySlice.actions;
export default gallerySlice.reducer;