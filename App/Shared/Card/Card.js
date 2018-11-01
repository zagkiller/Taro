import React, { PureComponent } from 'react'
import { Image, View, TouchableHighlight } from 'react-native'

class Card extends PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      showImage: this.props.bgImage,
      turned: this.props.turned,
    }
  }

  _turnImage(openImage){
    if (openImage) {
      this.setState({
        showImage : this.props.openImage.image
      }) 
    }
  }

  render () {
    const {idCard, onPress, openImage, styleCard} = this.props;
    return (
      <TouchableHighlight key={idCard} onPress={() => { onPress(idCard); this._turnImage(openImage) } } >
          <Image source={this.state.showImage} style={styleCard} />
      </TouchableHighlight>
    )
  }
}


export default Card;