declare module 'common-interface' {
    export type MESSAGE_TYPE =
        | 'COMMON'
        | 'AWS'
        | 'AZURE'
        | 'OPENSTACK'
        | 'VMWARE';
    export interface INotice {
        type: MESSAGE_TYPE;
        message: string;
        createdTime?: any;
    }

    export interface IWindowSize {
        width: number;
        height: number;
    }

    export interface ICommon {
        customSidebar: boolean;
        breakpoint: string;
        windowSize: IWindowSize;
        queryParams: object;
        group: string;
        locale: string;
        isLoading: boolean;
        notice: Array<INotice>;
    }
}
