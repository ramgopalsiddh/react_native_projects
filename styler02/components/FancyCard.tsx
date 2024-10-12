import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri: 'https://media.istockphoto.com/id/481658071/photo/hawa-mahal-jaipur-india.jpg?s=612x612&w=0&k=20&c=Vzux4HM51dmApeYtsEXkh3p3mthMY41oRPlFCFEGW3s='
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal <Text style={styles.cardLabel}>(Pink City, Jaipur)</Text></Text>
            
            <Text style={styles.cardDescription}>The Hawa Mahal is a palace in Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    card: {
        width: 360,
        height: 360,
        borderRadius: 8,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    cardImage: {
        height: 230,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 6,
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1,
    },
    cardFooter: {
        color: '#000000',
        marginBottom: 12,
    },
})