# LinkWithDropdown

## Usage

```js
import { LinkWithDropdown } from 'asc-web-components';
```

#### Description

Link with dropdown

#### Usage

```js
<LinkWithDropdown color = "black" isBold = {true} data={data}>Link with dropdown</LinkWithDropdown>
```

#### Properties

| Props              | Type     | Required | Values                      | Default        | Description                                                       |
| ------------------ | -------- | :------: | --------------------------- | -------------- | ----------------------------------------------------------------- |                 |
| `dropdownType`     | `oneOf`  |    ✅    | `alwaysDotted, appearDottedAfterHover`| -  | Type of dropdown: alwaysDotted is always show dotted style and icon of arrow, appearDottedAfterHover is show dotted style and icon arrow only after hover              |
| `data`            | `array`  |    -     | - | -  | Array of objects, each can contain `<DropDownItem />` props              |
| `color`            | `oneOf`  |    -     | gray, black, blue| `black`  | Color of link in all states - hover, active, visited              |
| `fontSize`           | `number`   |    -     | -                       | `12`        | Font size of link (in px)                        |
| `isBold`           | `bool`   |    -     | -                         | `false`        | Set font weight                          |
| `title`           | `string`   |    -     | -                           | -        | Title of link                          |                 |
| `isTextOverflow`   | `bool`   |    -     | -                           | `true`        |Activate or deactivate *text-overflow* CSS property with ellipsis (' … ') value                           |
| `isSemitransparent`           | `bool`   |    -     | -                           | `false`        | Set css-property 'opacity' to 0.5. Usually apply for users with "pending" status        |    |