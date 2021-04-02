import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80' }} />
      {/* bed  */}
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
      {/* type description */}
      <Text style={styles.description} numberOfLines={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid id
        lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Text>
      {/* old price a new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrices}>$45</Text>
        <Text style={styles.newPrices}> $30</Text>
        / nigth
      </Text>
      {/* total price */}
      <Text style={styles.totalPrices}>$230 total</Text>

    </View>
  )
}

export default Post
