declare module 'layout-interface' {
    // 레이아웃 정보
    export interface ILayout {
        i: string;
        x: number;
        y: number;
        w: number;
        h: number;
        minW?: number;
        minH?: number;
        maxW?: number;
        maxH?: number;
        static?: boolean;
    }

    // 위젯 정보
    export interface IWidget {
        wgId: number; // id
        parentId: number; // 부모 id
        wgGb: string; // 위젯 구분 B: 게시판, J: json, I: image, H: html, T: text
        wgType?: string; // 위젯 타입 N: 일반, T: 탭
        wgTabYn?: boolean; // 위젯 탭 여부
        wgTabCnt?: number; // 위젯 탭 수
        wgTitle?: string; // 위젯 타이틀
        description?: string; // 설명
        xSize?: number; // X 사이즈
        ySize?: number; // Y 사이즈
        // method: string; // 호출 방식
        pageUrl?: string; // Page URL
        jsonUrl?: string; // JSON URL
        // templateUrl: string; // Template URL
        useYn: boolean; // 사용여부
        // nessYn: boolean; // 필수여부
        refreshYn?: boolean; // refresh 여부
        autoYn?: boolean; // 자동갱신 여부
        autoTime?: number; // 자동갱신 시간
        moreYn?: boolean; // 더보기표시 여부
        moreUrl?: string; // 더보기 URL
        moreType?: string; // 더보기 타입
        popOption?: string; // 팝업 옵션
        // disorder?: number; // 정렬순서
        imgModYn?: boolean; // 이미지 수정가능 여부
        rollTime?: number; // 이미지 롤링 타임
        // certiYn: boolean; // 인증 여부
        // certiUrl: string; // 인증 URL
        personalYn?: boolean; // 개인사용 여부
        error?: any;
    }

    // 위젯 레이아웃 정보
    export interface IWidgetLayout extends ILayout, IWidget {}
}
