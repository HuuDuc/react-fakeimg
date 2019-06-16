# fakeimg
Need fake image for your mockup ? **react-fakeimg** will create for you a fake image thanks to **canvas**. No **internet connection** required.

## Install in your project

#### via npm

```sh
npm install --save react-fakeimg
```

#### via yarn

```sh
yarn add react-fakeimg
```

## How to use

### Simple example

```js
import FakeImg from 'react-fakeimg';

<FakeImg
  alt="example"
  width={500}
  height={200}
/>
```

### Text example

```js
import FakeImg from 'react-fakeimg';

<FakeImg
  alt="example"
  width={500}
  height={200}
  text="Bonjour!"
/>
```

### Change color example

```js
import FakeImg from 'react-fakeimg';

<FakeImg
  alt="example"
  width={500}
  height={200}
  text="New color"
  bgColor="#005cc5"
  fontColor="#ffffff"
/>
```

## API

#### Attributes list

Properties | type | Required | default | Description
--- | --- | :---: | --- | ---
alt | *string* | **✓** |  | alt attribute is require in HTML5 for img tag
bgColor | *string* |  | #c19d67 | Background colors
className | *string* |  |  | Add class attribute
fontColor | *string* |  | #3a2306 | Font color
height | *Number* | **✓** |  | Image height
id | *string* |  |  | #id
text | *string* |  |  | text to replace "width x height"
style | *object* |  |  | If you want to add style
width | *Number* | **✓** |  | Image width

#### Events list

Name | type | Parameters | Required | Description
--- | --- | :---: | --- | ---
onClick | *func* | none |  | Called when click on the component
onMouseEnter | *func* | none |  | Called when mouse enter the component
onMouseLeave | *func* | none |  | Called when mouse leave the component