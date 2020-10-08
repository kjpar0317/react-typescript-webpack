import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import 'moment/locale/ko';

// import { MAX_TOAST_POP } from '@/constants';
import { ICommon, INotice, IWindowSize, MESSAGE_TYPE } from 'common-interface';

const MAX_TOAST_POP = 10;

const initState: ICommon = {
    customSidebar: false,
    breakpoint: 'lg',
    windowSize: { width: 0, height: 0 },
    queryParams: {},
    group: 'admin',
    locale: navigator.language.split(/[-_]/)[0],
    isLoading: false,
    notice: [],
};

const slice = createSlice({
    name: 'COMMON',
    initialState: initState,
    reducers: {
        changeScreen: (
            state: ICommon,
            { payload: flag }: PayloadAction<boolean>,
        ) => {
            state.customSidebar = flag;
        },
        changeBreakpoint: (
            state: ICommon,
            { payload: breakpoint }: PayloadAction<string>,
        ) => {
            state.breakpoint = breakpoint;
        },
        setWindowSize: (
            state: ICommon,
            { payload: { width, height } }: PayloadAction<IWindowSize>,
        ) => {
            state.windowSize.width = width;
            state.windowSize.height = height;
        },
        setQueryParams: (
            state: ICommon,
            { payload: queryParams }: PayloadAction<object>,
        ) => {
            state.queryParams = queryParams;
        },
        changeGroup: (
            state: ICommon,
            { payload: group }: PayloadAction<string>,
        ) => {
            state.group = group;
        },
        setLoading: (
            state: ICommon,
            { payload: isLoading }: PayloadAction<boolean>,
        ) => {
            state.isLoading = isLoading;
        },
        setLocale: (
            state: ICommon,
            { payload: locale }: PayloadAction<string>,
        ) => {
            state.locale = locale;
        },
        getStreamNotice: (
            state: ICommon,
            { payload: type }: PayloadAction<MESSAGE_TYPE>,
        ) => {
            console.log(type);
        },
        pushNotice: (
            state: ICommon,
            { payload: { type, message } }: PayloadAction<INotice>,
        ) => {
            state.notice.push({
                type: type,
                message: message,
                createdTime: moment(),
            });

            if (state.notice.length > MAX_TOAST_POP) {
                state.notice.shift();
            }
        },
    },
});

export const COMMON = slice.name;
export const commonReducer = slice.reducer;
export const commonAction = slice.actions;
