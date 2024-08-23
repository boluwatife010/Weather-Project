import mongoose, { Schema, Document } from 'mongoose';
interface IWeather extends Document {
    city: string;
    data: Record<string, unknown>; 
    createdAt: Date;
    updatedAt: Date;
}
const weatherSchema = new Schema<IWeather>(
    {
        city: {
            type: String,
            required: true,
        },
        data: {
            type: Schema.Types.Mixed, 
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            expires: 3600, 
        },
    },
    {
        timestamps: true, 
    }
);
export const weatherModel = mongoose.model<IWeather>('Weather', weatherSchema);
