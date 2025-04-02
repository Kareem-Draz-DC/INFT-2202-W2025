
import mongoose from "mongoose";

export function connectToMongo(connectionString: string): any {
    mongoose.connect(connectionString).then(() => {
        console.log("Connected to database successfully!")
    }).catch((error: any) => console.log(error))
}

