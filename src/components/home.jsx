import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'

import consts from '../constants'
import { CreateParty } from '../actions/createParty'


const scaleOption = (value, key) => (
  <option key={key}>{key}</option>
)

let select
const view = ({createParty}) => (
  <div>
    <section>
      <label>
        Point scale
        <select ref={(el) => select = el}>
          {_.map(consts.Scales, scaleOption)}
        </select>
      </label>
    </section>

    <section>
      <button onClick={createParty}>Create Party</button>
    </section>
  </div>
)

const mapToProps = (state) => ({
})

const mapToDispatch = (dispatch) => ({
  createParty: () => {
    dispatch(CreateParty(select.value))
  }
})

export const Home = connect(mapToProps, mapToDispatch)(view)
