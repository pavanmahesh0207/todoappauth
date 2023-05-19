import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAcE85fhSvELyxAbLBMrGF3AfExnqEVUmU',
  authDomain: 'todo-app-b373b.firebaseapp.com',
  projectId: 'todo-app-b373b',
  storageBucket: 'todo-app-b373b.appspot.com',
  messagingSenderId: '985022312599',
  appId: '1:985022312599:web:163d781aab9e55b30979d2',
}
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db }
