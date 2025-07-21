// src/app/services/firebase-error.service.ts
export const AUTH_ERROR_MESSAGES: {[key: string]: string} = {
    'auth/email-already-exists': 'This email is already associated with an account.',
    'auth/invalid-email': 'The email address format is invalid.',
    'auth/user-not-found': 'No user found with this email address.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/weak-password': 'Password is too weak. It must be at least 6 characters.',
    'auth/email-already-in-use': 'That email address is already in use.',
    'auth/operation-not-allowed': 'This sign-in method is currently disabled.',
    'auth/invalid-credential': 'The credentials provided are invalid.',
    'auth/invalid-password': 'Invalid password. Must be at least 6 characters.',
    'auth/id-token-expired': 'Your session has expired. Please log in again.',
    'auth/id-token-revoked': 'Your session has been revoked. Please log in again.',
    'auth/too-many-requests': 'Too many attempts. Please wait and try again.',
    'auth/internal-error': 'A server error occurred. Please try again later.',
    'auth/invalid-uid': 'Invalid user ID provided.',
    'auth/uid-already-exists': 'The user ID is already in use.',
    'auth/invalid-user-import': 'The user data is invalid.',
    'auth/claims-too-large': 'Your account role settings are too large. Contact support.',
    'auth/invalid-claims': 'Invalid role data. Please contact support.',
    'auth/reserved-claims': 'Custom claims use reserved keywords. Contact support.',
    'auth/insufficient-permission': 'Insufficient permissions to complete this action.',
    'auth/project-not-found': 'The authentication project could not be found.',
    'auth/invalid-id-token': 'Invalid session token. Please log in again.',
    'auth/session-cookie-expired': 'Your session has expired. Please sign in again.',
    'auth/session-cookie-revoked': 'Your session was revoked. Please sign in again.',
    'auth/invalid-continue-uri': 'Invalid redirect URL after login.',
    'auth/unauthorized-continue-uri': 'Redirect URL is not whitelisted.',
    // Add more as needed...

    // Fallback
    'default': 'An unknown error occurred. Please try again.'
  };

