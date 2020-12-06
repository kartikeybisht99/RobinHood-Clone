import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyASiBZI6dzMa6iYppRqOd1XndNFKKT2-6A',
  authDomain: 'robinhood-7990f.firebaseapp.com',
  projectId: 'robinhood-7990f',
  storageBucket: 'robinhood-7990f.appspot.com',
  messagingSenderId: '813143417347',
  appId: '1:813143417347:web:49a2df0325ae8785842436',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
export { db }
