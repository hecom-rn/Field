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
    ButtonCondition: wrapper(ButtonCondition),
    Display: wrapper(Display),
    Edit: wrapper(Edit),
    Filter: wrapper(Filter),
    FilterCondition: wrapper(FilterCondition),
    Process: wrapper(Process),
    ProcessFilter: wrapper(ProcessFilter),
    Sortable: wrapper(Sortable),
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