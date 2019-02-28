import * as Specials from 'specials';

const rootNode = {};

const Display = 'display';
const Edit = 'edit';
const Filter = 'filter';
const Process = 'process';
const ProcessFilter = 'processFilter';
const Sortable = 'sortable';
const FilterCondition = 'filtercondition';
const SearchCondition = 'searchcondition';
const ButtonCondition = 'buttoncondition';

export default {
    register: {
        display: _register(Display),
        edit: _register(Edit),
        filter: _register(Filter),
        process: _register(Process),
        processFilter: _register(ProcessFilter),
        sortable: _register(Sortable),
        filterCondition: _register(FilterCondition),
        searchCondition: _register(SearchCondition),
        buttonCondition: _register(ButtonCondition),
    },
    unregister: {
        display: _unregister(Display),
        edit: _unregister(Edit),
        filter: _unregister(Filter),
        process: _unregister(Process),
        processFilter: _unregister(ProcessFilter),
        sortable: _unregister(Sortable),
        filterCondition: _unregister(FilterCondition),
        searchCondition: _unregister(SearchCondition),
        buttonCondition: _unregister(ButtonCondition),
    },
    match: {
        display: _match(Display),
        edit: _match(Edit),
        filter: _match(Filter),
        process: _match(Process),
        processFilter: _match(ProcessFilter),
        sortable: _match(Sortable),
        filterCondition: _match(FilterCondition),
        searchCondition: _match(SearchCondition),
        buttonCondition: _match(ButtonCondition),
    },
};

function _register(action) {
    return {
        general: function (type, subType, handle) {
            return Specials.register(rootNode, [action, type, subType], undefined, handle);
        },
        specific: function (metaName, fieldName, handle) {
            const special = function (state) {
                const {layout = {}} = state;
                return layout.metaName === metaName && layout.name === fieldName;
            };
            return Specials.register(rootNode, [action], special, handle);
        },
        custom: function (special, handle) {
            return Specials.register(rootNode, [action], special, handle);
        },
        batch: function (fieldMap) {
            Object.keys(fieldMap).forEach(type => {
                const value = fieldMap[type];
                if (!value) {
                    return;
                }
                if (typeof value === 'function') {
                    Specials.register(rootNode, [action, type], undefined, value);
                } else if (typeof value === 'object') {
                    Object.keys(value).forEach(subType => {
                        Specials.register(rootNode, [action, type, subType], undefined, value[subType]);
                    });
                }
            });
        },
    };
}

function _unregister(action) {
    return function (type, subType, funcId) {
        return Specials.unregister(rootNode, [action, type, subType], funcId);
    };
}

function _match(action) {
    return function (state, params) {
        const {layout: {type, subType} = {}} = state;
        return Specials.get(rootNode, [action, type, subType], state, params);
    };
}