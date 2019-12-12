import {State} from "./typings";
import {HandleFunc, HandleId, HandleResult, Instance, StateFunc} from "specials";

export default function <S extends State, P, R>(instance: Instance<S, P, R>) {
    return {
        general: function (type: string,
                           subType: string,
                           handle: R | HandleFunc<P, R>): void {
            return instance.registerDefault([type, subType], handle);
        },
        specific: function (metaName: string,
                            fieldName: string,
                            handle: HandleFunc<P, R>,
                            priority: number): HandleId {
            const special = function (state: S) {
                const {layout = {}} = state;
                return layout.metaName === metaName && layout.name === fieldName;
            };
            return instance.registerSpecial([], special, handle, priority);
        },
        custom: function (special: StateFunc<S>, handle: HandleFunc<P, R>, priority: number) {
            return instance.registerSpecial([], special, handle, priority);
        },
        batch: function (fieldMap: object) {
            Object.keys(fieldMap).forEach((type) => {
                const value = fieldMap[type];
                if (!value) {
                    return;
                }
                if (typeof value === 'function') {
                    instance.registerDefault([type], value);
                } else if (typeof value === 'object') {
                    Object.keys(value).forEach((subType) => {
                        instance.registerDefault([type, subType], value[subType]);
                    });
                }
            });
        },
        unregister: instance.unregister,
        match: function (state: S, params: P): HandleResult<R> {
            const {layout: {type, subType}} = state;
            return instance.get([type, subType], state, params);
        },
    };
}