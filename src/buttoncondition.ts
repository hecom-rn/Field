import * as Specials from 'specials';
import {Meta} from '@hecom/types';
import * as Types from './typings';

export interface State extends Types.DataState {
    button: Meta.Button;
}

export interface Params {
    left: any;
    right: any;
    op: Meta.ButtonConditionOperator;
}

export type Result = boolean;

export const Instance = Specials.getInstance<State, Params, Result>();