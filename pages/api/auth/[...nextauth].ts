import NextAuth from "next-auth";
import GithubPrivider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GithubPrivider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
    // callbacks: {
    //   async signIn(user, account, profile) {
    //     // console.log(user, account, profile);
    //     return true;
    //   }
    // }
});
