import * as Specials from 'specials';

export default function<S, P, R>(instance: Specials.Instance<S, P, R>) {
    return {
        general: function (
            type: string,
            subType: string,
            handle: R | Specials.HandleFunc<P, R>
        ): void {
            return instance.registerDefault([type, subType], handle);
        },
        specific: function (
            metaName: string,
            fieldName: string,
            handle: Specials.HandleFunc<P, R>
        ): Specials.HandleId {
            const special = function (state: S) {
                const {layout = {}} = state;
                return layout.metaName === metaName && layout.name === fieldName;
            };
            return instance.registerSpecial([], special, handle);
        },
        custom: function (special, handle) {
            return instance.registerSpecial([], special, handle);
        },
        batch: function (fieldMap) {
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
        match: function (
            state: S,
            params: P
        ): Specials.HandleResult<R> {
            const {layout: {type, subType}} = state;
            return instance.get([type, subType], state, params);
        },
    };
}