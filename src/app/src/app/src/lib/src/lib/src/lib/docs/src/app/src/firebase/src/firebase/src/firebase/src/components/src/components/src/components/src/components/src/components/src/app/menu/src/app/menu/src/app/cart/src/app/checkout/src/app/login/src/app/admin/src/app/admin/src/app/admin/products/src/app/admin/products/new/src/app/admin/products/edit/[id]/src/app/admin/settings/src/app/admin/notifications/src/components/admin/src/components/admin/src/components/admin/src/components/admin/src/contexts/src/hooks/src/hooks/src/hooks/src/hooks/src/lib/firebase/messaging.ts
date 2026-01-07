'use client';

import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { useFirebase } from '@/firebase';
import { useEffect } from 'react';

export const requestNotificationPermission = async () => {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    console.error('Notification API not supported.');
    return null;
  }

  const { firebaseApp } = useFirebase();
  if (!firebaseApp) {
    console.error('Firebase app not initialized');
    return null;
  }
  const messaging = getMessaging(firebaseApp);
  
  console.log('Requesting permission...');
  const permission = await Notification.requestPermission();

  if (permission === 'granted') {
    console.log('Notification permission granted.');
    // TODO: Get the token here and send it to the server.
    const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
    if (vapidKey) {
        const token = await getToken(messaging, { vapidKey });
        console.log('FCM Token:', token);
        // Here you would typically send the token to your server
        // to store it and use it for sending notifications.
        return token;
    } else {
        console.error('VAPID key not found. Cannot get FCM token.');
        return null;
    }
  } else {
    console.log('Unable to get permission to notify.');
    return null;
  }
};

export const useNotificationListener = (enabled: boolean = true) => {
    const { firebaseApp } = useFirebase();

    useEffect(() => {
        if (!enabled || !firebaseApp || typeof window === 'undefined') return;

        const messaging = getMessaging(firebaseApp);

        const unsubscribe = onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            // You can handle foreground messages here, e.g., by showing a custom toast.
            new Notification(payload.notification?.title || 'New Message', {
                body: payload.notification?.body,
                icon: payload.notification?.icon || '/logo.svg',
            });
        });

        return () => {
            unsubscribe();
        }
    }, [firebaseApp, enabled]);
};
