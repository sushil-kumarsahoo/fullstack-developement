import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email & Password",
            credentials: {
                email: { label: "Username", type: "email", placeholder: 'Email' },
                password: { label: "Password", type: "password", placeholder: 'Password' },
            },
             async authorize(credentials){
                console.log(credentials);
                
                return {
                    id:"user1",
                    name:"soumya",
                    email:"soumya@gmail"

                };
             },
        })
    ],
    secret:process.env.NEXTAUTH_SECRET
});


export { handler as GET, handler as POST }