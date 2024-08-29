import { v } from "convex/values";
import { internalMutation } from "./_generated/server";

//! Functions

export const createUsers = internalMutation({
    args:{
        clerkID: v.string(),
        email: v.string(),
        imageUrl: v.string(),
        name: v.string(),

    }, handler: async(ctx, args) =>{
        // create a new user
        await ctx.db.insert('users', {
            clerkID: args.clerkID,
            email: args.email,
            imageUrl: args.imageUrl,
            name: args.name
        })

    }
})