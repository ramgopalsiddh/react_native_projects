import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Ram Gopal Siddh',
            status: 'A half-learned engineer',
            imageUrl: 'https://avatars.githubusercontent.com/u/82461166?v=4',
        },
        {
            uid: 2,
            name: 'Suraj Nath Siddh',
            status: 'Maker, Working at Grafana on Tempo ',
            imageUrl: 'https://avatars.githubusercontent.com/u/9503187?v=4',
        },
        {
            uid: 3,
            name: 'Animesh-Ghosh',
            status: 'I ❤️ To Code with Rbuy and Python',
            imageUrl: 'https://avatars.githubusercontent.com/u/34956994?v=4',
        },
        {
            uid: 4,
            name: 'Abhishek Bairwa',
            status: 'Building Things Using Salesforce',
            imageUrl: 'https://avatars.githubusercontent.com/u/70994232?v=4',
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView  style={styles.container}
      scrollEnabled={false} >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image 
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage} />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>    
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        marginBottom: 8,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#8D3DAF',
        padding: 4,
        borderRadius: 14,
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000'
    },
    userStatus: {
        fontSize: 12,
    },
})