# btn-ui

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/btn-ui.svg)](https://www.npmjs.com/package/btn-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save btn-ui
```

## Usage

```jsx
import { Button } from 'btn-ui'

const example = () => {
    return (
       <>
        <Button text='Primary Button' className='btn-ui btn-ui-primary' /><br />
        <Button text='Default Button' className='btn-ui' /> <br />
        <Button text='Dashed Button' className='btn-ui btn-ui-dashed' /> <br />
        <Button text='Text Button' className='btn-ui btn-ui-text' /> <br />
        <Button text='Link Button' className='btn-ui btn-ui-link' /> <br />
       </>
    )
  }
export default example;
```

## License

MIT © [halisogluiskender](https://github.com/halisogluiskender)
