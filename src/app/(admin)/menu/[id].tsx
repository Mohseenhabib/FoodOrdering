import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import products from '@/assets/data/products';
import { useState } from 'react';
import Button from '@/src/components/Button';
import { useCart } from '@/src/providers/CartProvider';
import { PizzaSize } from '@/src/types';

const sizes: PizzaSize[] = ['S','M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const {id} = useLocalSearchParams();
  const {addItem}= useCart();
  const router= useRouter();
  const[selectedSize, setSelectedSize]= useState<PizzaSize>('M');
  const product = products.find((p) => p.id.toString() === id);
  const addToCart= ()=>{
    if(!product){
      return;
    }
    addItem(product, selectedSize);
    router.push('/cart');
  };

  return (
    <View style= {styles.container}>
      <Stack.Screen options={{title: product?.name}}/>
      <Image source= {{uri: product.image}} style= {styles.image}/>
      <Text style= {styles.title}>{product.name}</Text>

      <Text style= {styles.price}>SAR {product.price}</Text>
      {/* <Button onPress={addToCart} text='Add To Cart'/> */}
    </View>
  );
};
const styles=StyleSheet.create({
container:{
  backgroundColor: 'black',
  padding: 10,
  flex: 1,
},
image:{
  width: '100%',
  aspectRatio : 1,
  
},
price:{
  fontSize: 18,
  fontWeight: 'bold',
  color: 'white',
  padding:5,
  marginTop: 0
},
title:{
  fontSize: 18,
  fontWeight: 'bold',
  color: 'white',
  padding:5,
  marginTop: 0
}

});
export default ProductDetailsScreen;