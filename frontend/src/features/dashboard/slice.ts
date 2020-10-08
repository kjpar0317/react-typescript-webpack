import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IDashboardLayout {
    publicLayout: any;
    privateLayouts: {
        [key: string]: any;
    };
    tempLayout: any;
    activeIndex: number;
    isReady: boolean;
    error: any;
}

const initState: IDashboardLayout = {
    tempLayout: [],
    publicLayout: [],
    privateLayouts: [],
    activeIndex: 0,
    isReady: false,
    error: null,
};

const slice = createSlice({
    name: 'DASHBOARD',
    initialState: initState,
    reducers: {
        loadLayouts: (state: IDashboardLayout) => {},
        setLayouts: (
            state: IDashboardLayout,
            { payload: { publicLayout, privateLayouts } }: PayloadAction<any>,
        ) => {
            state.publicLayout = publicLayout;
            state.privateLayouts = privateLayouts;
        },
        setPublicLayout: (
            state: IDashboardLayout,
            { payload: publicLayout }: PayloadAction<any>,
        ) => {
            state.publicLayout = publicLayout;
        },
        setPrivateLayouts: (
            state: IDashboardLayout,
            { payload: privateLayouts }: PayloadAction<any>,
        ) => {
            state.privateLayouts = privateLayouts;
        },
        setTempLayout: (
            state: IDashboardLayout,
            { payload: tempLayout }: PayloadAction<any>,
        ) => {
            state.tempLayout = tempLayout;
        },
        errorPublic: (
            state: IDashboardLayout,
            { payload: error }: PayloadAction<any>,
        ) => {
            state.publicLayout.error = error;
        },
        errorPrivate: (
            state: IDashboardLayout,
            { payload: error }: PayloadAction<any>,
        ) => {
            state.error = error;
        },
        setReady: (
            state: IDashboardLayout,
            { payload: isReady }: PayloadAction<boolean>,
        ) => {
            state.isReady = isReady;
        },
        setActiveIndex: (
            state: IDashboardLayout,
            { payload: index }: PayloadAction<number>,
        ) => {
            state.activeIndex = index;
        },
    },
});

const selectPublicLayout = createSelector(
    (state: IDashboardLayout) => state.publicLayout,
    (publicLayout: any) => publicLayout,
);

const selectPrivateLayouts = createSelector(
    (state: IDashboardLayout) => state.privateLayouts,
    (privateLayouts: any) => privateLayouts,
);

const selectTempLayouts = createSelector(
    (state: IDashboardLayout) => state.tempLayout,
    (tempLayout: any) => tempLayout,
);

const selectIsReady = createSelector(
    (state: IDashboardLayout) => state.isReady,
    (isReady: boolean) => isReady,
);

const selectActiveIndex = createSelector(
    (state: IDashboardLayout) => state.activeIndex,
    (activeIndex: number) => activeIndex,
);

const selectAllState = createSelector(
    selectPublicLayout,
    selectPrivateLayouts,
    selectTempLayouts,
    selectIsReady,
    selectActiveIndex,
    (publicLayout, privateLayouts, tempLayout, isReady, activeIndex) => {
        return {
            publicLayout,
            privateLayouts,
            tempLayout,
            isReady,
            activeIndex,
        };
    },
);

export const DASHBOARD = slice.name;
export const dashboardSelector = {
    all: (state: any) => selectAllState(state[slice.name]),
    publicLayout: (state: any) => selectPublicLayout(state[slice.name]),
    privateLayouts: (state: any) => selectPrivateLayouts(state[slice.name]),
    tempLayout: (state: any) => selectTempLayouts(state[slice.name]),
    isReady: (state: any) => selectIsReady(state[slice.name]),
    activeIndex: (state: any) => selectActiveIndex(state[slice.name]),
};
export const dashboardReducer = slice.reducer;
export const dashboardAction = slice.actions;
