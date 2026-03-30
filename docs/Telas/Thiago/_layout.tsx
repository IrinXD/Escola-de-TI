import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Perfil from './perfil';

export default function App() {
  const [pets, setPets] = useState([
    { id: '1', nome: 'Aurélio', idade: '5', raca: 'Pug', tutor: 'Thiago', cotutores: 'Carol, Hugo', nascimento: '18/11/2020', foto: require('../assets/images/foto-aurelio.jpg') },
    { id: '2', nome: 'Snuppy', idade: '6', raca: 'Pinscher', tutor: 'Thiago', cotutores: 'Carol, Hugo', nascimento: '15/12/2019', foto: require('../assets/images/foto-snuppy.jpg') },
  ]);

  const [selectedId, setSelectedId] = useState(null);
  const [telaAtual, setTelaAtual] = useState('passeio');

  const selectedPet = pets.find(p => p.id === selectedId);

  const atualizarPet = (id, novoNome, novosCotutores) => {
    setPets(prev => prev.map(p => p.id === id ? { ...p, nome: novoNome, cotutores: novosCotutores } : p));
  };

  if (telaAtual === 'perfil') {
    return (
      <Perfil 
        pet={selectedPet} 
        aoVoltar={() => setTelaAtual('passeio')} 
        aoSalvar={(nome, cotutores) => atualizarPet(selectedPet.id, nome, cotutores)}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <View style={styles.pagina}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.header}>
            <Image source={require('../assets/images/icon-pequeno.png')} style={styles.iconPequeno} />
            <Text style={styles.titulo}>Passeio</Text>
          </View>

          <View style={styles.linhaSelecao}>
            <Text style={styles.labelPet}>Pets:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {pets.map((pet) => (
                <TouchableOpacity 
                  key={pet.id} 
                  style={[styles.chip, selectedId === pet.id && styles.chipAtivo]}
                  onPress={() => setSelectedId(selectedId === pet.id ? null : pet.id)}
                >
                  <Text style={selectedId === pet.id ? styles.txtBranco : styles.txtPreto}>{pet.nome}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.corpo}>
            {selectedPet ? (
              <ScrollView contentContainerStyle={styles.scrollInfo} showsVerticalScrollIndicator={false}>
                <View style={styles.fotoContainer}>
                  <Image source={selectedPet.foto} style={styles.fotoPetGrande} />
                  <TouchableOpacity onPress={() => setTelaAtual('perfil')}>
                    <Text style={styles.txtVerPerfil}>Ver Perfil</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.informacoesAbaixo}>
                  <Text style={styles.campo}><Text style={styles.labelBold}>Nome: </Text>{selectedPet.nome}</Text>
                  <Text style={styles.campo}><Text style={styles.labelBold}>Raça: </Text>{selectedPet.raca}</Text>
                  <Text style={styles.campo}><Text style={styles.labelBold}>Tutor: </Text>{selectedPet.tutor}</Text>
                </View>
              </ScrollView>
            ) : (
              <View style={styles.vazioContainer}>
                <Image source={require('../assets/images/icon-vazio.png')} style={styles.fotoPetGrande} />
              </View>
            )}
          </View>

          {selectedId && (
            <TouchableOpacity style={styles.btnIniciar}>
              <Text style={styles.txtBtnIniciar}>INICIAR O PASSEIO</Text>
            </TouchableOpacity>
          )}
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  pagina: { flex: 1, backgroundColor: '#a1f7da' },
  safeArea: { flex: 1, paddingHorizontal: 20, justifyContent: 'space-between' },
  header: { marginTop: '8%', flexDirection: 'row', alignItems: 'flex-end' },
  iconPequeno: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  titulo: { fontSize: 22, fontWeight: 'bold' },
  linhaSelecao: { flexDirection: 'row', alignItems: 'center', marginTop: 15 },
  labelPet: { fontSize: 18, fontWeight: 'bold', marginRight: 10 },
  chip: { paddingHorizontal: 15, paddingVertical: 8, backgroundColor: '#fff', borderRadius: 20, marginRight: 10, borderWidth: 1, borderColor: '#ddd' },
  chipAtivo: { backgroundColor: '#2D5A50', borderColor: '#2D5A50' },
  txtBranco: { color: '#fff', fontWeight: 'bold' },
  txtPreto: { color: '#000' },
  corpo: { flex: 1, paddingVertical: 10 },
  fotoContainer: { alignSelf: 'flex-end', alignItems: 'center' },
  fotoPetGrande: { width: 200, height: 200, borderRadius: 100, backgroundColor: '#fff' },
  txtVerPerfil: { color: '#007AFF', fontSize: 16, marginTop: 5 },
  informacoesAbaixo: { width: '100%', marginTop: 10 },
  campo: { fontSize: 28, marginBottom: 10 },
  labelBold: { fontWeight: 'bold', fontSize: 28 },
  vazioContainer: { alignSelf: 'flex-end' },
  btnIniciar: { backgroundColor: '#2D5A50', padding: 20, borderRadius: 35, alignItems: 'center', marginBottom: 40 },
  txtBtnIniciar: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }
});