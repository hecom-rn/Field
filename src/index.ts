import wrapper from './util';
import * as ButtonCondition from './buttoncondition';
import * as Display from './display';
import * as Edit from './edit';
import * as Filter from './filter';
import * as FilterCondition from './filtercondition';
import * as Process from './process';
import * as ProcessFilter from './processfilter';
import * as Sortable from './sortable';

export default {
    ButtonCondition: wrapper(ButtonCondition.Instance),
    Display: wrapper(Display.Instance),
    Edit: wrapper(Edit.Instance),
    Filter: wrapper(Filter.Instance),
    FilterCondition: wrapper(FilterCondition.Instance),
    Process: wrapper(Process.Instance),
    ProcessFilter: wrapper(ProcessFilter.Instance),
    Sortable: wrapper(Sortable.Instance),
};

export {
    ButtonCondition,
    Display,
    Edit,
    Filter,
    FilterCondition,
    Process,
    ProcessFilter,
    Sortable,
};
