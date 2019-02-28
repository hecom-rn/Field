import * as Specials from 'specials';
import * as Types from './typings';

export type State = Types.State;

export type Params = Types.Params;

export type Result = string;

export const Instance = Specials.getInstance<State, Params, Result>();