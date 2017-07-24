var React = require('react')
var ReactDOM = require('react-dom')

function ColorList (props) {
  return (
    <div>
    {props.list.map((color, id) => (
      <Color key={id} color={color} />
      )
    )}
    </div>
  )
}

function Color (props) {
  return (
    <div style={{backgroundColor: props.color, height: '20px', width: '20px'}} />
  )
}

var data = {}
data.list = ['blue', 'green', 'red']
var view = ColorList(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
