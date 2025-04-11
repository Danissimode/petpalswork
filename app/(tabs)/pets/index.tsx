import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Dna, Award, QrCode } from 'lucide-react-native';
import { router } from 'expo-router';

const MOCK_PETS = [
  {
    id: '1',
    name: 'Max',
    breed: 'Golden Retriever',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    metricNumber: 'GR-2023-001',
    pedigree: true,
    awards: 3,
  },
  {
    id: '2',
    name: 'Luna',
    breed: 'Siamese Cat',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    metricNumber: 'SC-2023-002',
    pedigree: true,
    awards: 1,
  },
];

export default function PetsScreen() {
  const [pets] = useState(MOCK_PETS);

  const renderPet = ({ item }) => (
    <TouchableOpacity 
      style={styles.petCard}
      onPress={() => router.push(`/pets/${item.id}`)}>
      <Image source={{ uri: item.image }} style={styles.petImage} />
      <View style={styles.petInfo}>
        <View style={styles.petHeader}>
          <Text style={styles.petName}>{item.name}</Text>
          {item.pedigree && (
            <View style={styles.pedigreeBadge}>
              <Dna size={14} color="#FF9F1C" />
              <Text style={styles.pedigreeText}>Pedigree</Text>
            </View>
          )}
        </View>
        <Text style={styles.petBreed}>{item.breed}</Text>
        <View style={styles.metricContainer}>
          <QrCode size={14} color="#666666" />
          <Text style={styles.metricNumber}>{item.metricNumber}</Text>
        </View>
        {item.awards > 0 && (
          <View style={styles.awardsContainer}>
            <Award size={14} color="#FFD700" />
            <Text style={styles.awardsText}>{item.awards} Awards</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        renderItem={renderPet}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateTitle}>No pets added yet</Text>
            <Text style={styles.emptyStateText}>
              Add your first pet to start tracking their information
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  listContainer: {
    padding: 16,
  },
  petCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  petImage: {
    width: 100,
    height: 100,
  },
  petInfo: {
    flex: 1,
    padding: 12,
  },
  petHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  pedigreeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  pedigreeText: {
    fontSize: 12,
    color: '#FF9F1C',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  petBreed: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  metricContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  metricNumber: {
    fontSize: 12,
    color: '#666666',
    marginLeft: 4,
  },
  awardsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  awardsText: {
    fontSize: 12,
    color: '#666666',
    marginLeft: 4,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
});
