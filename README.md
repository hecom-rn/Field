# Field

[![npm version](https://img.shields.io/npm/v/@hecom/field.svg?style=flat)](https://www.npmjs.com/package/@hecom/field)
[![Build Status](https://travis-ci.org/hecom-rn/Field.svg?branch=master)](https://travis-ci.org/hecom-rn/Field)

这是字段的注册管理模块，包括所有字段的操作的通用和特殊处理注册信息。

**接口**：

* `register`：下面是不同的分类，每个分类包含如下函数：
  * `general(type, subType, handle): void`：通用注册函数，传入字段的Type和SubType，注册处理方式。
  * `specific(metaName, fieldName, handle): string`：一般特殊处理函数，传入元数据名称和字段名称，注册特殊处理方式。
  * `custom(special, handle): string`：特殊处理函数，传入特殊判断条件和处理方式，进行注册。
  * `batch(fieldMap): void`：批量处理函数，`fieldMap`是一个最高二层的映射结构，第一级是字段的Type，第二级是字段的SubType。
* `unregister`：下面是不同的分类，每个分类对应一个注销函数，格式是`(type, subType, funcId): boolean`，传入字段的Type和SubType，以及特殊处理的Id，注销相应处理。
* `match`：下面是不同的分类，每个分类对应一个匹配函数，格式是`(state, params): any`，根据`state`进行匹配，`params`是对匹配结果的调用参数。

**分类**：

* `Display`：详情中的UI组件。
  * `state`：`{layout, data, others}`。
  * `params`：`{layout, data, others}`。
* `Edit`：新建或编辑页面的UI组件。
  * `state`：`{layout, data, custom, others}`。
  * `params`：`{layout, data, custom, others}`。
* `Filter`：筛选页面的UI组件。
  * `state`：`{layout, data, custom, others}`
  * `params`：`{layout, data, custom, others}`
* `Process`：对字段的值处理成可展示的内容。
  * `state`：`{layout}`。
  * `params`：`{metaid, field, value}`。
* `ProcessFilter`：对字段的值处理成筛选条件的值(Condition.right.value)。
  * `state`：`{layout}`。
  * `params`：`{field, value}`。
* `Sortable`：字段是否可排序。
  * `state`：`{layout}`。
  * `params`：`{}`。
* `FilterCondition`：字段的筛选条件生成方式。
  * `state`：`{layout}`。
  * `params`：`{metaid, layout, data}`。
* `SearchCondition`：字段的搜索条件生成方式。
  * `state`：`{}`。
  * `params`：`{}`。
* `ButtonCondition`：字段的按钮条件的判断方式。
  * `state`：`{metaid, layout, button, data}`。
  * `params`：`{left, right, op}`。