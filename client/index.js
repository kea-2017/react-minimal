var React = require('react')
var ReactDOM = require('react-dom')

function HelloTemplate (props) {
  return (
    <div>
      <div className='red'>hello {props.name}</div>
      <br />
      <GoodByeTemplate
        name='Don'
        msg={props.name}
        complex={{a:1, b:2}} />
    </div>
  )
}

function GoodByeTemplate (props) {
  return (
    <div>
      <div>good bye {props.name}</div>
      <div>{props.msg}</div>
      <div>{props.complex.a}</div>
    </div>
  )
}

var data = { name: 'mix' }
var view = HelloTemplate(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

