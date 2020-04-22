/// <reference types="node" />
import http = require('http');
import { Photo } from '../model/photo';
import { User } from '../model/user';
import { Authentication, Interceptor } from '../model/models';
export declare enum DefaultApiApiKeys {
}
export declare class DefaultApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: DefaultApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    appControllerGenerateDummyData(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    appControllerGetHello(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    appControllerGetPhotos(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Photo>;
    }>;
    appControllerGetUsers(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<User>;
    }>;
}
