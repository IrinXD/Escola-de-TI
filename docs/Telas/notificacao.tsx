import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Mock de dados simulando o retorno de uma API
const mockNotifications = [
  {
    id: '1',
    type: 'invite', // Convite de co-tutoria
    senderName: 'Carlos Silva',
    petName: 'Rex',
    message: 'convidou você para ser co-tutor do Rex.',
    read: false,
  },
  {
    id: '2',
    type: 'like', // Curtida
    senderName: 'Ana Souza',
    message: 'curtiu a foto do seu passeio.',
    read: true,
  },
  {
    id: '3',
    type: 'comment', // Comentário
    senderName: 'João Pedro',
    message: 'comentou: "Que fofo!" na sua publicação.',
    read: true,
  },
  {
    id: '4',
    type: 'follow', // Novo seguidor
    senderName: 'Mariana',
    message: 'começou a seguir você.',
    read: true,
  }
];

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState(mockNotifications);

  // Funções simuladas para os botões de ação
  const handleAccept = (id) => {
    console.log(`Convite ${id} aceito! O sistema vincularia o usuário ao pet.`);
    // Lógica para remover a notificação ou mudar o status dela
  };

  const handleDecline = (id) => {
    console.log(`Convite ${id} recusado. O sistema descarta a solicitação.`);
  };

  // Renderização individual de cada item da lista
  const renderItem = ({ item }) => {
    return (
      <View style={[styles.notificationCard, !item.read && styles.unreadCard]}>
        
        {/* Texto da Notificação */}
        <View style={styles.textContainer}>
          <Text style={styles.notificationText}>
            <Text style={styles.boldText}>{item.senderName} </Text>
            {item.message}
          </Text>
        </View>

        {/* Renderização Condicional: Botões aparecem apenas se for convite de co-tutoria */}
        {item.type === 'invite' && (
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.acceptButton]} 
              onPress={() => handleAccept(item.id)}
            >
              <Text style={styles.buttonText}>Aceitar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.declineButton]} 
              onPress={() => handleDecline(item.id)}
            >
              <Text style={styles.declineButtonText}>Recusar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Notificações</Text>
      
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  listContainer: {
    padding: 15,
  },
  notificationCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  unreadCard: {
    backgroundColor: '#E8F4FA', // Destaque sutil para não lidas
    borderLeftWidth: 4,
    borderLeftColor: '#007BFF',
  },
  textContainer: {
    marginBottom: 5,
  },
  notificationText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: '#007BFF',
  },
  declineButton: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  declineButtonText: {
    color: '#555',
    fontWeight: 'bold',
    fontSize: 14,
  },
});