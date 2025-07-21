// src/app/services/firebase.service.ts
import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, signInWithEmailAndPassword, signOut, User, UserProfile , createUserWithEmailAndPassword} from 'firebase/auth';
import { firebaseConfig } from '../../environments/firebase.config';
import { getFirestore, Firestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { Users } from '../interfaces/users';
import { AUTH_ERROR_MESSAGES } from './auth-errors';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;

  constructor(
  ) {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
  }

  async logIn(email: string, password: string): Promise<boolean | string> {
    try {
        const cred = await signInWithEmailAndPassword(this.auth, email, password);
        console.log('Logged In successfully :)');
        return true;

    } catch(error: any) {
        const errorCode = String(error.code);
        const errorMessage =  AUTH_ERROR_MESSAGES[errorCode] || AUTH_ERROR_MESSAGES['default'];
        console.error('Error logging in:', errorCode, errorMessage, 'Please try again later.');
        return errorMessage;
    }
  } 
  async createUser(email: string, password: string): Promise<boolean | string> {
    try {
        const cred = await createUserWithEmailAndPassword(this.auth, email, password);
        this.syncUserProfile(cred.user);
        console.log('User created successfully :)');
        return true;

    } catch(error: any) {
        const errorCode = String(error.code);
        const errorMessage =  AUTH_ERROR_MESSAGES[errorCode] || AUTH_ERROR_MESSAGES['default'];
        console.error('Error creating user:', errorCode, errorMessage, 'Please try again later.');
        return errorMessage;
    }
  } 

  async logOut(): Promise<void> {
    return signOut(this.auth);
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
  
  onAuthStateChanged(callback: (user: User | null) => void) {
    this.auth.onAuthStateChanged(callback);
  }

  private async syncUserProfile(user: User) {
    if(!user) return;

    const userDocRef = await doc(this.firestore, 'users', user.uid);
    const userDocSnap = await getDoc(userDocRef);

    if(!userDocSnap.exists()) {
        const userProfile: Users = {
            uid: user.uid,
            email: user.email || '',
            role: 'employee'
            // other arguments here
        };

        await setDoc(userDocRef, userProfile);
    } else {
        // allow for updating user info after resetting pin
    }
  }

  async getUserData(): Promise<Users | null> {
    const uid = await this.getCurrentUser()?.uid;
    if(uid) {
      const userDocRef = await doc(this.firestore, 'users', uid);
      const userDocSnap = await getDoc(userDocRef);
      if(userDocSnap.exists()){
              return userDocSnap.data() as Users;
          } else {
              return null;
          }
    } else {
      return null;
    }
  }

  async getUserRole(): Promise<string | null> {
    const user = await this.getUserData();
    if(user) {
      return String(user.role);
    } else {
      return null;
    }
  }

}