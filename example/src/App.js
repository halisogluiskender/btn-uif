import React from 'react'

import { Button } from 'btn-ui'

const App = () => {
  return (
    <>
      <div className='code-box-demo'>
        <Button text='Primary Button' className='btn-ui btn-ui-primary' />
        <br />
        <Button text='Default Button' className='btn-ui' /> <br />
        <Button text='Dashed Button' className='btn-ui btn-ui-dashed' /> <br />
        <Button text='Text Button' className='btn-ui btn-ui-text' /> <br />
        <Button text='Link Button' className='btn-ui btn-ui-link' /> <br />
      </div>
    </>
  )
}

export default App
