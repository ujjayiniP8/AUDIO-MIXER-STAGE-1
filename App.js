import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Sound1 extends Component {
  displayAlert = () => {
    alert('SOUND 1');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 1"
        onPress={this.displayAlert}
      />
    );
  }
}
class Sound2 extends Component {
  displayAlert = () => {
    alert('SOUND 2');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 2"
        onPress={this.displayAlert}
      />
    );
  }
}

class Sound3 extends Component {
  displayAlert = () => {
    alert('SOUND 3');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 3"
        onPress={this.displayAlert}
      />
    );
  }
}

class Sound4 extends Component {
  displayAlert = () => {
    alert('SOUND 4');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 4"
        onPress={this.displayAlert}
      />
    );
  }
}

class Sound5 extends Component {
  displayAlert = () => {
    alert('SOUND 5');
  };
  render() {
    return (
      <Button
        color={this.props.Mycolor}
        title="Sound 5"
        onPress={this.displayAlert}
      />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      
      //EXTRA
      <View style={{ marginTop: 20, marginBottom: 200 }}>
        <View style={{ backgroundColor: 'skyblue' }}>
          <Text style={{ marginTop: 5, marginBottom: 5, marginLeft: 50 }}>
            .              DJ AUDIO MIXER             .
          </Text>
        </View>
        <Sound1 Mycolor="red" />
        <Text> </Text>
        <Sound2 Mycolor="blue" />
        <Text> </Text>
        <Sound3 Mycolor="purple" />
        <Text> </Text>
        <Sound4 Mycolor="yellow" />
        <Text> </Text>
        <Sound5 Mycolor="green" />
      </View>
    )
  }
}


