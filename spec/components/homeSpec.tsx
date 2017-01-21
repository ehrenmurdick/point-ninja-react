import * as React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import { Home } from '../../src/components/Home'

describe('<Home/>', () => {
  let renderer
  let result: React.ReactElement<any>
  beforeEach(() => {
    renderer = createRenderer()
    renderer.render(<Home />)
    result = renderer.getRenderOutput()
  })

  it('renders', () => {
    expect(result.type).toBe('div')
  })
})
