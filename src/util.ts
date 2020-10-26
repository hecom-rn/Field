import {Layout, State} from "./typings";
import {Meta} from '@hecom/types';
import {HandleFunc, HandleId, HandleResult, Instance, StateFunc} from "specials";

export default function <S extends State, P, R>(instance: Instance<S, P, R>) {
    return {
        general: function (type: string,
                           subType: string,
                           handle: R | HandleFunc<P, R>): void {
            return instance.registerDefault(['std', type, subType], handle);
        },
        /**
         * 替换指定对象的指定字段的实现。通常用于固定的、内置的对象
         * @param metaName 对象apiName
         * @param fieldName 字段apiName
         * @param handle 处理函数
         * @param priority 优先级
         */
        specific: function (metaName: string,
                            fieldName: string,
                            handle: HandleFunc<P, R>,
                            priority?: number): HandleId {
            const special = function (state: S) {
                const {layout = ({} as Meta.Field)} = state || {};
                return layout.metaName === metaName && layout.name === fieldName;
            };
            return instance.registerSpecial(['std'], special as StateFunc<S>, handle, priority);
        },
        /**
         * 替换指定应用的指定字段的实现，应用字段可能被安装在任意对象上。通常用于可以动态的安装在自定义对象上的应用
         * @param appName 应用名称
         * @param fieldName 字段apiName
         * @param handle 处理函数
         * @param priority 优先级
         */
        specificApp: function (appName: string, fieldName: string, handle: HandleFunc<P, R>, priority?: number): HandleId {
            const special = function (state: S) {
                const {layout = {} as Layout} = state || {};
                return appName === layout.appName && layout.name === fieldName;
            }
            return instance.registerSpecial([appName], special as StateFunc<S>, handle, priority);
        },
        custom: function (special: StateFunc<S>, handle: HandleFunc<P, R>, priority?: number) {
            return instance.registerSpecial([], special, handle, priority);
        },
        batch: function (fieldMap: { [key: string]: any }) {
            Object.keys(fieldMap).forEach((type) => {
                const value = fieldMap[type];
                if (!value) {
                    return;
                }
                if (typeof value === 'function') {
                    instance.registerDefault(['std', type], value);
                } else if (typeof value === 'object') {
                    Object.keys(value).forEach((subType) => {
                        instance.registerDefault(['std', type, subType], value[subType]);
                    });
                }
            });
        },
        unregister: instance.unregister,
        match: function (state: S, params: P): HandleResult<R> {
            const {layout: {type, subType, appName = 'std'}} = state;
            return instance.get([appName, type, subType], state, params);
        },
    };
}
