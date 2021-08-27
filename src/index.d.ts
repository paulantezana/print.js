declare function printJS(configuration: printJS.Configuration): void;
declare function printJS(source: string, type?: printJS.PrintTypes): void;

declare namespace printJS {
  type PrintTypes = 'pdf' | 'html' | 'raw-html';

  interface Configuration {
    printable: any;
    fallbackPrintable?: string;
    type?: PrintTypes;
    documentTitle?: string;
    header?: any;
    headerStyle?: string;
    targetStyle?: string | string[];
    targetStyles?: string | string[];
    properties?: any;
    gridHeaderStyle?: string;
    gridStyle?: string;
    onLoadingStart?: () => void;
    onLoadingEnd?: () => void;
    frameId?: string;
    ignoreElements?: string | string[];
    repeatTableHeader?: boolean;
    css?: string | string[];
    style?: string;
    scanStyles?: boolean;
    onError?: (error: any, xmlHttpRequest?: XMLHttpRequest) => void;
    onIncompatibleBrowser?: () => void;
    base64?: boolean;

    // Deprecated
    onPdfOpen?: () => void;
  }
}

export = printJS;
