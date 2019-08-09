# Label

## Usage

```js
import { Label } from 'asc-web-components';
```

### <Label>

Component displays the field name in the form

#### Usage

```js

<Label isInline={false} title={"first name"} htmlFor="firstNameField">First name:</Label>

```

#### Properties

| Props              | Type     | Required | Values                      | Default   | Description                                                                                                                                      |
| ------------------ | -------- | :------: | --------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isRequired`       | `bool`     |    -     | -                     | false     | Indicates that the field to which the label is attached is required to fill |
| `error`            | `bool`     |    -     | -                     | -         | Indicates that the field to which the label is attached is incorrect        |
| `isInline`         | `bool`     |    -     | -                     | true      | Sets the 'display: inline-block' property                                   |
| `title`            | `string`   |    -     | -                     | -         | Title                                                                       |
| `truncate`         | `bool`     |    -     | -                     | false     | Disables word wrapping                                                      |
| `htmlFor`          | `string`   |    -     | -                     | -         | The field ID to which the label is attached                                 |


