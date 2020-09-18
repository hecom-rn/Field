import {Meta} from '@hecom/types';

export type Layout = Meta.Field & { appName: string };

export type Data = any;

export interface State {
    layout: Layout;
    others?: Object;
}

export interface DataState extends State {
    data: Data;
}

export interface Params {
    layout: Layout;
    data: Data;
    others?: Object;
}
