import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.screen_wrapper}>
      <View style={styles.nav_wrapper}>
        <View style={styles.header}>
          <View style={styles.header_ctrl}>
            <Button title="✖"/>
            <Text>Adicionar Publicação</Text>
            <Button title="PROSSEGUIR"/>
          </View>
        </View>

        <View style={styles.content}>
        <Text style={styles.textoColor}> O que está acontecendo?</Text>
        </View>


        <View style={styles.botton_tab}>
          <View style={styles.botton_ctrl}>
            <Button title="..."/> 

            <View style={styles.publi_ctrl}>
              <Button title="📍"/>
              <Button title="📎"/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  screen_wrapper: {
    flex: 1,
    backgroundColor: 'whitesmoke'
  },

  nav_wrapper: {
    flex:1
  },

  header: {
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
    shadowColor: "#000",
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },

  header_ctrl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 15/16
  },

  publi_ctrl:{
    justifyContent: 'space-around'
  },

  botton_ctrl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 15/16
  },


  content: {
    flex: 8,
    padding: 8
  },

  textoColor: {
    Color: 'gray'
  },

  botton_tab: {
    backgroundColor: 'white',
    justifyContent: 'center',
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

  publi_ctrl: {
    flexDirection: 'row',
  },

  content_tab: {
    flex: 1/13,
    flexDirection: 'row',
    padding: 5
  },

});