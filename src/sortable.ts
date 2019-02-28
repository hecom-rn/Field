import * as Specials from 'specials';
import * as Types from './typings';

export type State = Types.State;

export type Params = {};

export type Result = boolean;

export const Instance = Specials.getInstance<State, Params, Result>();