import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

const BlogPostForm = ({ onSubmit, initVal }) => {
  const [title, setTitle] = useState(initVal.title);
  const [content, setContent] = useState(initVal.content);

  return (
    <View>
      <Text style={style.label}>Enter Title: </Text>
      <TextInput
        style={style.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={style.label}>Enter Content: </Text>
      <TextInput
        style={style.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button title='Save Blog Post' onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initVal: {
    title: '',
    content: ''
  }
};

const style = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 15,
    marginLeft: 5
  }
});

export default BlogPostForm;
