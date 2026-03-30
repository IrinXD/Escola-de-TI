import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.screen_wrapper}>
      <View style={styles.nav_wrapper}>
        <View style={styles.header}>
          <View style={styles.logo_wrapper}><Text>LOGO</Text></View>

          <View style={styles.nav_top_wrapper}>
            <View style={styles.push_not_wrapper}><Button title="🔔"/>
            
          

            </View>
            <View style={styles.add_newpost_wrapper}><Button title="➕"/></View>
          </View>
        </View>

        <View style={styles.badge}></View>

        <View style={styles.content}>
            <View style={styles.content_tab}>
              <View style={styles.tab_option}><Button title="seguindo"/></View>
              <View style={styles.tab_option}><Button title="amigos"/></View>
            </View>

            <View style={styles.publi_content}>
              <View style={styles.publi}>
                <View style={styles.user_wrapper}>
                  <View style={styles.user}>
                    <View style={styles.user_pic}><Text></Text></View>
                    <View style={styles.user_name}><Text>user_ com Pet1</Text></View>
                  </View>
                </View>

                <View style={styles.publi_media}>
                
                </View>

                <View style={styles.interact_wrapper}>
                  <View style={styles.btns_left}>
                    <Button title="❤️"/>
                    <Button title="💬"/>
                  </View>
                  <View style={styles.btns_right}>
                    <Button title="➤"/>
                    <Button title="📌"/>
                  </View>
                </View>
                <View style={styles.post_desc}><Text><b>user_</b> Um passeio com o melhor amigo do homem <i>#dog #foryou #bestfriends</i></Text></View>
              </View>
            </View>

            <View style={styles.end_feed_wrapper}>
              <View style={styles.end_feed}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 18 }}>Fim das publicações</Text>
                <Button title="Explorar?"/>
              </View>
            </View>
        </View>


        <View style={styles.botton_tab}>
            <View style={styles.push_not_wrapper}><Button title="📰"/></View>
            <View style={styles.add_newpost_wrapper}><Button title="🔍"/></View>
            <View style={styles.push_not_wrapper}><Button title=" ▶ "/></View>
            <View style={styles.add_newpost_wrapper}><Button title="🚩"/></View>
            <View style={styles.push_not_wrapper}><Button title="👤"/></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  badge: {
    position: 'absolute',
    backgroundColor: 'red',
    minWidth: 18,
    height: 18,
    
  },
  
  screen_wrapper: {
    flex: 1,
    backgroundColor: 'whitesmoke'
  },

  nav_wrapper: {
    flex:1
  },

  header: {
    backgroundColor: 'white',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },

  logo_wrapper: {
    flex:1/3,
    alignItems: 'center',
    justifyContent: 'center'
  },

  nav_top_wrapper: {
    flex:1/3,
    flexDirection: 'row'
  },

  push_not_wrapper: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  add_newpost_wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 8,
  },

  botton_tab: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },

  content_tab: {
    flex: 1/13,
    flexDirection: 'row',
    padding: 5
  },

  tab_option: {
    marginRight: 5
  },

  end_feed: {
    margin: 5,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  publi_content: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  publi: {
    width: '100%',
    height: 335,

  },

  user_wrapper: {
    flex: 1/8,
    flexDirection:  'row',
    width: '100%',
  },

  publi_media: {
    flex: 6/8,
    backgroundColor: 'pink',
    width: '100%',
  },

  interact_wrapper: {
    flex: 1/8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5
  },

  user: {
    flex: 7/10,
    marginStart: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },

  user_pic: {
    width: 30,
    height: 30,
    borderRadius: 15, 
    backgroundColor: 'gray',
  },

  user_name: {
    width: '90%',
    height: 32,
    justifyContent: 'center',
    padding: 8

  },

  btns_left: { 
    flex: 1/4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  btns_right: { 
    flex: 1/4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  post_desc: {
    padding: 5
  },

   end_feed_wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  }

});