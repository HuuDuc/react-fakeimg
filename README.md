# React Fakeimg

<p align="center">
  <a href="https://www.npmjs.com/package/react-fakeimg"><img src="https://img.shields.io/npm/v/react-fakeimg.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/react-fakeimg"><img src="https://img.shields.io/npm/dm/react-fakeimg.svg?style=flat-square"></a>
</p>

Need fake image for your mockup ? **react-fakeimg** will create for you a fake image thanks to **canvas**. There is no HTTP Requests which means **internet connection** is not required.

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

### Import ES6

```js
import FakeImg from 'react-fakeimg';
```

### Simple example

```js
<FakeImg
  alt="example"
  width={500}
  height={200}
/>
```

### Text example

```js
<FakeImg
  alt="example"
  width={500}
  height={200}
  text="Bonjour!"
/>
```

### Change color example

```js
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
alt | *string* |  |  | alt attribute is require in HTML5 for img tag
bgColor | *string* |  | #c19d67 | Background colors
className | *string* |  |  | Add class attribute
fontColor | *string* |  | #3a2306 | Font color
height | *Number* | **✓** |  | Image height
id | *string* |  |  | #id
text | *string* |  |  | text to replace "width x height"
style | *object* |  |  | If you want to add style to the image
width | *Number* | **✓** |  | Image width

#### Events list

Name | type | Parameters | Required | Description
--- | --- | :---: | --- | ---
onMount | *func* | none |  | Called when the component did mount
onClick | *func* | none |  | Called when click on the component
onMouseEnter | *func* | none |  | Called when mouse enter the component
onMouseLeave | *func* | none |  | Called when mouse leave the component
onUnMount | *func* | none |  | Called when the component will unMount