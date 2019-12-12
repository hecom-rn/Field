import React from 'react';
import * as Specials from 'specials';
import * as Types from './typings';

export type State = Types.DataState;

export type Params = Types.Params;

export interface Props extends Object {
    title: string;
    content: Types.Data;
    fieldname: string;
}

export type Result = React.ElementType<Props>;

export const Instance = Specials.getInstance<State, Params, Result>();