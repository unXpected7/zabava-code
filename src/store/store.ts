import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./home";

const store = configureStore({
    reducer: {
        home: homeSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;