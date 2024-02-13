import { StyleSheet, Image,FlatList } from 'react-native';
import Colors from '@/src/constants/Colors';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';
export default function MenuScreen() {
  return(
      
        <FlatList
    data={products}
    renderItem={({item}) => <ProductListItem product= {item} />}
    numColumns={2}
        />
    
  );
}