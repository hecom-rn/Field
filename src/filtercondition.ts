import * as Specials from 'specials';
import { Filter } from '@hecom/types';
import * as Types from './typings';

export type State = Types.State;

export type Params = Types.Params;

export type Result = Filter.Condition;

export const Instance = Specials.getInstance<State, Params, Result>();