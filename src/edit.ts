import React from 'react';
import * as Specials from 'specials';
import * as Types from './typings';

export type State = Types.DataState;

export type Params = Types.Params;

export type Props = Params;

export type Result = React.ComponentElement<Props>;

export const Instance = Specials.getInstance<State, Params, Result>();