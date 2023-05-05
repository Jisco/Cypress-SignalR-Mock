import HubConnectionMock from "./types/HubConnectionMock.ts";
import IMockData from "./types/IMockData.ts";
export declare function isCypressRunning(): boolean;
export declare function getCypressSignalrMockData(): IMockData;
export declare function setCypressSignalrMockData(value: IMockData): void;
export declare function clearCypressSignalrMockData(): void;
export declare function defaultCypressSignalrMockData(): IMockData;
export declare function getHubConnectionMock(hubName: string): HubConnectionMock | null;
export declare function isSSR(): boolean;
