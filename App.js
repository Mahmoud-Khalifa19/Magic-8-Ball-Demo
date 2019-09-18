import React, { useEffect, useState } from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';
import {getResponse} from './responses';
import style from './styles'

const App = () => {
    const [text, setState] = useState('')
    return (
      < >
        <View style={style.titleView}>
            <Text style={style.title}>Magic 8 Ball</Text>
        </View>
        <ImageBackground
          style={style.imageBackground}
          testID="image-background"
          source={require('./assets/triangle-1.png')}
        >
          <View
            style={style.textView}
          >
            <Button
              title="Click Me"
              color="black"
              onPress={() => {
                setState(getResponse())
              }}
              testID="button"
            >

            </Button>
            <Text
              style = {style.response}
              testID = "response-text"
              >
              {text}
            </Text>
          </View>

        </ImageBackground>
      </>
    );
}

export default App;
