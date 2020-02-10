import wrapper from './util';
import FieldType from './fieldtype';
import FieldSubType from './fieldsubtype';
import * as ButtonCondition from './buttoncondition';
import * as Display from './display';
import * as Edit from './edit';
import * as FieldStyle from './fieldstyle';
import * as Filter from './filter';
import * as FilterCondition from './filtercondition';
import * as Process from './process';
import * as ProcessFilter from './processfilter';
import * as Sortable from './sortable';
import * as ConvertCheck from './convertCheck';

export default {
    // 常量部分
    Type: FieldType,
    SubType: FieldSubType,
    // 注册部分
    ButtonCondition: wrapper(ButtonCondition.Instance),
    ConvertCheck: wrapper(ConvertCheck.Instance),
    Display: wrapper(Display.Instance),
    Edit: wrapper(Edit.Instance),
    FieldStyle: wrapper(FieldStyle.Instance),
    Filter: wrapper(Filter.Instance),
    FilterCondition: wrapper(FilterCondition.Instance),
    Process: wrapper(Process.Instance),
    ProcessFilter: wrapper(ProcessFilter.Instance),
    Sortable: wrapper(Sortable.Instance),
};