import connectDB from "@/app/(home)/lib/Database/Database";
import { User } from "@/app/(home)/lib/models/User.model";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcrypt';
import { GoogleUser } from "@/app/(home)/lib/models/Google.mode";
import { createGoogleUser } from "@/app/(home)/lib/Database/Query/createGoogleUser";


const handler = NextAuth({
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,

    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) {
                    return null
                }
                await connectDB()
                const currentUser = await User.findOne({ email });
                if (!currentUser) {
                    return null
                }
                const isMachPass = bcrypt.compareSync(password, currentUser.password);
                if (!isMachPass) {
                    return null
                }
                return currentUser;
            }

        }),
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === 'google') {
                const { name, email, img } = user;

                try {
                    await connectDB();
                    const exsit = await GoogleUser.findOne({ email })
                    if (!exsit) {
                        await createGoogleUser(user);
                        return user
                    }
                    else {
                        return user
                    }
                } catch (error) {
                    throw new Error(error)
                }
            }
            return true
        }
    }

});

export { handler as GET, handler as POST };