import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyBEsXIodxcnZbCJ7eBDMjkLh6buk_9_tkA",
	authDomain: "boardapp-54964.firebaseapp.com",
	projectId: "boardapp-54964",
	storageBucket: "boardapp-54964.appspot.com",
	messagingSenderId: "1032689040715",
	appId: "1:1032689040715:web:3f5ed3fd6b91069949bcce",
	measurementId: "G-QT481ZW1NK"
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

export default firebase
