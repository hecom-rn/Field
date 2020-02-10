import * as Specials from 'specials';
import * as Types from './typings';

export type State = Types.DataState;

export type Params = Types.Params;

export type Result = any;

export const Instance = Specials.getInstance<State, Params, Result>();