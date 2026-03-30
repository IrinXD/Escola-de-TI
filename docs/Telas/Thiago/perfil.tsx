import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Perfil({ pet, aoVoltar, aoSalvar }) {
  const [editando, setEditando] = useState(false);
  const [nome, setNome] = useState(pet.nome);
  const [cotutores, setCotutores] = useState(pet.cotutores);

  const passeios = [
    { id: '1', autor: 'Thiago', km: '2.5', data: '20/03 - 10:00' },
    { id: '2', autor: 'Carol', km: '1.8', data: '18/03 - 17:30' },
  ];

  return (
    <View style={styles.pagina}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Image source={require('../assets/images/icon-pequeno.png')} style={styles.iconPequeno} />
          <Text style={styles.titulo}>Perfil</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.fotoContainer}>
            <View>
              <Image source={pet.foto} style={styles.fotoGrande} />
              {editando && <Image source={require('../assets/images/EDITAR.png')} style={[styles.fotoGrande, styles.overlayEditar]} />}
            </View>
            <TouchableOpacity onPress={() => setEditando(true)} style={styles.btnEditar}>
              <Text style={styles.txtEditar}>Editar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoArea}>
            <View style={styles.linhaInfo}>
              <Text style={styles.label}>Nome: </Text>
              {editando ? (
                <TextInput style={styles.input} value={nome} onChangeText={setNome} />
              ) : (
                <Text style={styles.valor}>{nome}</Text>
              )}
            </View>

            <View style={styles.linhaInfo}>
              <View style={styles.rowInlineItem}>
                <Text style={styles.label}>Idade: </Text>
                <Text style={styles.valor}>{pet.idade}</Text>
              </View>
              <View style={[styles.rowInlineItem, { marginLeft: 20 }]}>
                <Text style={styles.label}>Raça: </Text>
                <Text style={styles.valor}>{pet.raca}</Text>
              </View>
            </View>

            <View style={styles.linhaInfo}>
              <Text style={styles.label}>Tutor: </Text>
              <Text style={styles.valor}>{pet.tutor}</Text>
            </View>
            
            <View style={styles.linhaInfo}>
              <Text style={styles.label}>Cotutores: </Text>
              {editando ? (
                <TextInput style={styles.input} value={cotutores} onChangeText={setCotutores} />
              ) : (
                <Text style={styles.valor}>{cotutores}</Text>
              )}
            </View>

            <View style={styles.linhaInfo}>
              <Text style={styles.label}>Nascimento: </Text>
              <Text style={styles.valor}>{pet.nascimento}</Text>
            </View>
          </View>

          {!editando && (
            <View style={styles.areaPasseios}>
              <Text style={styles.tituloPasseios}>Últimos Passeios:</Text>
              {passeios.map(p => (
                <View key={p.id} style={styles.itemPasseio}>
                  <Text style={styles.txtPasseio}>{p.data} - {p.autor} ({p.km}km)</Text>
                </View>
              ))}
            </View>
          )}
        </ScrollView>

        <View style={styles.rodape}>
          {!editando ? (
            <TouchableOpacity style={styles.btnVoltar} onPress={aoVoltar}>
              <Text style={styles.txtBtn}>VOLTAR</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.areaBotoesEdicao}>
              <View style={styles.rowBotoes}>
                <TouchableOpacity 
                  style={[styles.btnAcao, { backgroundColor: '#2D5A50' }]} 
                  onPress={() => { aoSalvar(nome, cotutores); setEditando(false); }}
                >
                  <Text style={styles.txtBtn}>SALVAR</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.btnAcao, { backgroundColor: '#ff4444' }]} 
                  onPress={() => { setEditando(false); setNome(pet.nome); setCotutores(pet.cotutores); }}
                >
                  <Text style={styles.txtBtn}>CANCELAR</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.btnExcluir}>
                <Text style={styles.txtExcluir}>EXCLUIR PET</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: { flex: 1, backgroundColor: '#a1f7da' },
  safeArea: { flex: 1, paddingHorizontal: 20 },
  header: { marginTop: '8%', flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  iconPequeno: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
  fotoContainer: { alignSelf: 'flex-end', alignItems: 'center', marginTop: 10, marginBottom: 20 },
  fotoGrande: { width: 220, height: 220, borderRadius: 110, backgroundColor: '#fff' },
  overlayEditar: { position: 'absolute', opacity: 0.7 },
  btnEditar: { marginTop: 5 },
  txtEditar: { color: '#007AFF', fontSize: 16, textDecorationLine: 'underline' },
  infoArea: { width: '100%', marginTop: 5 },
  linhaInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  rowInlineItem: { flexDirection: 'row', alignItems: 'center' },
  label: { fontWeight: 'bold', fontSize: 18, color: '#000' },
  valor: { fontSize: 18, color: '#333' },
  input: { borderBottomWidth: 1, borderColor: '#2D5A50', fontSize: 18, flex: 1, marginLeft: 5 },
  areaPasseios: { marginTop: 10, backgroundColor: 'rgba(255,255,255,0.4)', padding: 15, borderRadius: 15 },
  tituloPasseios: { fontWeight: 'bold', fontSize: 18, marginBottom: 10 },
  itemPasseio: { paddingVertical: 8, borderBottomWidth: 0.5, borderColor: '#888' },
  txtPasseio: { fontSize: 16 },
  rodape: { paddingVertical: 20 },
  btnVoltar: { backgroundColor: '#2D5A50', padding: 18, borderRadius: 30, alignItems: 'center' },
  areaBotoesEdicao: { width: '100%' },
  rowBotoes: { flexDirection: 'row', justifyContent: 'space-between' },
  btnAcao: { width: '48%', padding: 18, borderRadius: 30, alignItems: 'center' },
  btnExcluir: { marginTop: 15, alignItems: 'center' },
  txtExcluir: { color: 'red', fontWeight: 'bold', fontSize: 16 },
  txtBtn: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});