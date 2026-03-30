import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Mock de dados do passeio finalizado (dados imutáveis de geolocalização e tempo)
const mockWalkData = {
  petName: 'Rex',
  petPhoto: 'https://via.placeholder.com/100', // Substituir por imagem real do pet
  mapSnapshot: 'https://via.placeholder.com/400x300', // Substituir por um print estático da API do Google Maps
  distance: '3.5 km',
  duration: '45 min',
  date: '26 de Março de 2026',
};

export default function CanvasShareScreen() {

  // Função que simulará o acionamento do menu nativo do sistema operacional
  const handleShare = () => {
    // No app real, aqui entraria a lógica de capturar a "canvasView" em imagem
    // e chamar a API de compartilhamento nativo (ex: react-native-share)
    Alert.alert(
      "Compartilhar",
      "O sistema operacional abrirá o menu nativo com a imagem gerada para o Instagram/WhatsApp."
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Resumo do Passeio</Text>
      
      <Text style={styles.subtitle}>
        Confira o percurso e compartilhe essa conquista!
      </Text>

      {/* A View abaixo (canvasView) é o elemento que será transformado em imagem.
        Ela deve conter a rota, a foto do pet e as métricas.
      */}
      <View style={styles.canvasView}>
        
        {/* Imagem estática do mapa com a rota traçada */}
        <Image 
          source={{ uri: mockWalkData.mapSnapshot }} 
          style={styles.mapImage} 
        />
        
        {/* Overlay com as informações do Pet e Métricas */}
        <View style={styles.infoOverlay}>
          
          <View style={styles.petProfile}>
            <Image source={{ uri: mockWalkData.petPhoto }} style={styles.petImage} />
            <View>
              <Text style={styles.petName}>{mockWalkData.petName}</Text>
              <Text style={styles.dateText}>{mockWalkData.date}</Text>
            </View>
          </View>

          <View style={styles.metricsContainer}>
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>Distância</Text>
              <Text style={styles.metricValue}>{mockWalkData.distance}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>Tempo</Text>
              <Text style={styles.metricValue}>{mockWalkData.duration}</Text>
            </View>
          </View>

        </View>
      </View>

      {/* Botão para acionar a exportação e compartilhamento */}
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Text style={styles.shareButtonText}>Compartilhar nas Redes Sociais</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  // Estilo principal do "Canvas" que será exportado
  canvasView: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 15,
    overflow: 'hidden', // Importante para a imagem não vazar das bordas arredondadas
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  mapImage: {
    width: '100%',
    height: 250,
    backgroundColor: '#E0E0E0',
  },
  infoOverlay: {
    padding: 20,
    backgroundColor: '#FFF',
  },
  petProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#007BFF', // Destaque na cor principal do app
  },
  petName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  dateText: {
    fontSize: 12,
    color: '#888',
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    paddingVertical: 15,
  },
  metricBox: {
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  metricValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  divider: {
    width: 1,
    height: '80%',
    backgroundColor: '#DDD',
  },
  shareButton: {
    width: '100%',
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  shareButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});