// src/app/services/firebase.service.ts
import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, signInWithEmailAndPassword, signOut, User, UserProfile , createUserWithEmailAndPassword} from 'firebase/auth';
import { firebaseConfig } from '../../environments/firebase.config';
import { getFirestore, Firestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { Users } from '../interfaces/users';
import { NotificationService } from './notification.service';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;

  constructor(
    private notificationService: NotificationService
  ) {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
  }

  async logIn(email: string, password: string): Promise<boolean> {
    try {
        const cred = await signInWithEmailAndPassword(this.auth, email, password);
        console.log('Logged In successfully :)');
        this.notificationService.show('Successful Log In!', 'success');
        return true;

    } catch(error: any) {
        const errorMessage = error.message;
        const errorCode = error.code;
        console.log('Failied to Log In');
        console.error('Error signing in:', errorCode, errorMessage, 'Please try again later.');
        this.notificationService.show( 'Failed to Log In right now, please try again.', 'error');
        return false;
    }
  } 
  async createUser(email: string, password: string): Promise<boolean> {
    try {
        const cred = await createUserWithEmailAndPassword(this.auth, email, password);
        console.log('User created successfully :)');
        return true;

    } catch(error: any) {
        const errorMessage = error.message;
        const errorCode = error.code;
        console.error('Error creating user:', errorCode, errorMessage, 'Please try again later.');
        return false;
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

  async getUserData(uid: string): Promise<Users | null> {
    const userDocRef = await doc(this.firestore, 'users', uid);
    const userDocSnap = await getDoc(userDocRef);
    if(userDocSnap.exists()){
            return userDocSnap.data() as Users;
        } else {
            return null;
        }
    }
}
