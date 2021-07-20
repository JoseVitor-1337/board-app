import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import firebase from "services/firebaseConnection"

export default NextAuth({
	providers: [
		Providers.GitHub({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			scope: "read:user"
		})
	],

	callbacks: {
		async session(session, profile) {
			try {
				const lastDonate = await firebase
					.firestore()
					.collection("users")
					.doc(String(profile.sub))
					.get()
					.then((document) => {
						if (document.exists) {
							return document.data().lastDonate.toDate()
						} else {
							return null
						}
					})

				return {
					...session,
					id: profile.sub,
					vip: lastDonate ? true : false,
					lastDonate
				}
			} catch (err) {
				return {
					...session,
					id: null,
					vip: false,
					lastDonate: null
				}
			}
		},
		async signIn(user) {
			try {
				return true
			} catch (err) {
				console.log(`Deu Error`, err)
				return false
			}
		}
	}
})
