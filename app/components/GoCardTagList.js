import React from 'react';
import { StyleSheet, View } from 'react-native';

import GoCardTag from './GoCardTag';

function GoCardTagList({ tags }) {
  return (
    <View style={styles.container}>
      {tags.map((tag, idx) =>
        <GoCardTag key={idx} label={tag.label} icon={tag.icon} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  }
})

export default GoCardTagList;
