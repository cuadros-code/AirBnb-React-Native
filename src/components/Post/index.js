import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card} >
        <Image style={styles.image} source={{ uri: post?.image }} />
        {/* bed  */}
        <Text style={styles.bedrooms}>{post?.bed} bed · 1{post?.bedrooms} bedroom</Text>
        {/* type description */}
        <Text style={styles.description} numberOfLines={2}>
          {post?.type}. {post?.title}
          {/* {post?.description} */}
        </Text>
        {/* old price a new price */}
        <Text style={styles.prices}>
          <Text style={styles.oldPrices}>${post?.oldPrice}</Text>
          <Text style={styles.newPrices}> ${post?.newPrice}</Text>
        / nigth
        </Text>
        {/* total price */}
        <Text style={styles.totalPrices}>${post?.totalPrice} total</Text>
      </View>
    </View>
  )
}

export default Post
