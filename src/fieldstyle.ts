import { TextStyle, StyleProp } from 'react-native';
import * as Specials from 'specials';
import * as Types from './typings';

export type State = Types.DataState;

export type Params = Types.Params;

export type Result = StyleProp<TextStyle>;

export const Instance = Specials.getInstance<State, Params, Result>();