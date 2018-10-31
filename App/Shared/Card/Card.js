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

  turnImage(){
    this.setState({
      showImage : this.props.openImage.image

    }) 
  }

  render () {
    const {idCard, onPress, isTurned, styleCard} = this.props;
    return (
      <TouchableHighlight key={idCard} onPress={() => {this.turnImage(); onPress(idCard) } } >
          <Image source={this.state.showImage} style={styleCard} />
      </TouchableHighlight>
    )
  }
}


export default Card;