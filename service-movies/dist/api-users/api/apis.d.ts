/// <reference types="node" />
export * from './defaultApi';
import { DefaultApi } from './defaultApi';
import * as fs from 'fs';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number);
}
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare const APIS: (typeof DefaultApi)[];
