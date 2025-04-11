import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Dna, Award, QrCode, Calendar, Palette, MapPin, CreditCard as Edit2 } from 'lucide-react-native';

const MOCK_PET = {
  id: '1',
  name: 'Max',
  breed: 'Golden Retriever',
  image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  metricNumber: 'GR-2023-001',
  birthDate: '2020-05-15',
  color: 'Golden',
  location: 'New York, NY',
  pedigree: true,
  awards: [
    { id: '1', title: 'Best in Show', date: '2023-06-15' },
    { id: '2', title: 'Agility Champion', date: '2023-08-20' },
    { id: '3', title: 'Good Boy Award', date: '2023-12-01' },
  ],
  pedigreeInfo: {
    father: {
      name: 'Rocky',
      metricNumber: 'GR-2018-023',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
    mother: {
      name: 'Bella',
      metricNumber: 'GR-2019-045',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
  },
};

export default function PetProfileScreen() {
  const { id } = useLocalSearchParams();
  const pet = MOCK_PET; // In real app, fetch pet by id

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: pet.image }} style={styles.coverImage} />
        <TouchableOpacity style={styles.editButton}>
          <Edit2 size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.basicInfo}>
          <Text style={styles.name}>{pet.name}</Text>
          <Text style={styles.breed}>{pet.breed}</Text>
          
          <View style={styles.metricContainer}>
            <QrCode size={16} color="#666666" />
            <Text style={styles.metricNumber}>{pet.metricNumber}</Text>
          </View>

          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Calendar size={20} color="#666666" />
              <Text style={styles.infoLabel}>Birth Date</Text>
              <Text style={styles.infoValue}>{pet.birthDate}</Text>
            </View>
            
            <View style={styles.infoItem}>
              <Palette size={20} color="#666666" />
              <Text style={styles.infoLabel}>Color</Text>
              <Text style={styles.infoValue}>{pet.color}</Text>
            </View>
            
            <View style={styles.infoItem}>
              <MapPin size={20} color="#666666" />
              <Text style={styles.infoLabel}>Location</Text>
              <Text style={styles.infoValue}>{pet.location}</Text>
            </View>
          </View>
        </View>

        {pet.pedigree && (
          <TouchableOpacity style={styles.pedigreeCard}>
            <View style={styles.pedigreeHeader}>
              <Dna size={24} color="#FF9F1C" />
              <Text style={styles.pedigreeTitle}>Pedigree Information</Text>
            </View>
            
            <View style={styles.pedigreePreview}>
              <View style={styles.parentCard}>
                <Image source={{ uri: pet.pedigreeInfo.father.image }} style={styles.parentImage} />
                <Text style={styles.parentName}>{pet.pedigreeInfo.father.name}</Text>
                <Text style={styles.parentMetric}>{pet.pedigreeInfo.father.metricNumber}</Text>
              </View>
              
              <View style={styles.parentCard}>
                <Image source={{ uri: pet.pedigreeInfo.mother.image }} style={styles.parentImage} />
                <Text style={styles.parentName}>{pet.pedigreeInfo.mother.name}</Text>
                <Text style={styles.parentMetric}>{pet.pedigreeInfo.mother.metricNumber}</Text>
              </View>
            </View>
            
            <Text style={styles.viewMore}>View Full Pedigree</Text>
          </TouchableOpacity>
        )}

        {pet.awards.length > 0 && (
          <View style={styles.awardsSection}>
            <View style={styles.sectionHeader}>
              <Award size={24} color="#FFD700" />
              <Text style={styles.sectionTitle}>Awards & Achievements</Text>
            </View>
            
            {pet.awards.map((award) => (
              <View key={award.id} style={styles.awardItem}>
                <Award size={16} color="#FFD700" />
                <View style={styles.awardInfo}>
                  <Text style={styles.awardTitle}>{award.title}</Text>
                  <Text style={styles.awardDate}>{award.date}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: 250,
  },
  editButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 8,
  },
  content: {
    padding: 16,
  },
  basicInfo: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  breed: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 8,
  },
  metricContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  metricNumber: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 8,
  },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    alignItems: 'center',
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 14,
    color: '#333333',
    fontWeight: '500',
  },
  pedigreeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  pedigreeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  pedigreeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: 8,
  },
  pedigreePreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  parentCard: {
    alignItems: 'center',
    flex: 1,
    padding: 8,
  },
  parentImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  parentName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 2,
  },
  parentMetric: {
    fontSize: 12,
    color: '#666666',
  },
  viewMore: {
    textAlign: 'center',
    color: '#FF9F1C',
    fontSize: 14,
    fontWeight: '500',
  },
  awardsSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: 8,
  },
  awardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  awardInfo: {
    marginLeft: 12,
  },
  awardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
  },
  awardDate: {
    fontSize: 12,
    color: '#666666',
  },
});
