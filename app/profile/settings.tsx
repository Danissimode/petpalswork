import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Platform, Dimensions, Alert } from 'react-native';
import { Stack, router } from 'expo-router';
import { Lock, Globe, Bell, Smartphone, Shield, LogOut, Trash2, ChevronRight, ChevronLeft } from 'lucide-react-native';

// Rest of the code remains the same

const handleLogout = () => {
  Alert.alert(
    'Logout',
    'Are you sure you want to logout?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => {
          router.replace('/');
        },
      },
    ],
    { cancelable: true }
  );
};

const handleDeleteAccount = () => {
  Alert.alert(
    'Delete Account',
    'This action cannot be undone. All your data will be permanently deleted.',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          router.replace('/');
        },
      },
    ],
    { cancelable: true }
  );
};
