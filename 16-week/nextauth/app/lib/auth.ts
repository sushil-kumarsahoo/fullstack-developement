import  CredentialsProvider  from "next-auth/providers/credentials";

export const NEXT_AUTH = {
     providers: [
        CredentialsProvider({
            name: "Email & Password",
            credentials: {
                email: { label: "Username", type: "email", placeholder: 'Email' },
                password: { label: "Password", type: "password", placeholder: 'Password' },
            },
            async authorize(credentials) {
                console.log(credentials);

                return {
                    id: "user1",
                    name: "soumya",
                    email: "soumya@gmail"

                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        signIn: ({ user }) => {
            if (user.email == "randomuername@gmail.com") {
                return false
            }
            return true
        },

        jwt: ({ token, user }) => {
            console.log({ token });
            token.userId = "styuytff"
            token.type = "admin"
            return token;
        },
        
        session: ({ session, token, user } : any) => {
            console.log({session});
            
            if (session && session.user) {
                session.user.id = token.userId;
            }
            return session;
        }
    },

}

console.log("SECRET:", process.env.NEXTAUTH_SECRET)