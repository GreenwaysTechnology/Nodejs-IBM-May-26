import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type UserDocument = HydratedDocument<User>;

@Schema({
    timestamps: true,
})
export class User {
    @Prop({
        required: true,
        trim: true,
    })
    name!: string;

    @Prop({
        required: true,
        unique: true,
        lowercase: true,
    })
    email!: string;

    @Prop({
        required: true,
        min: 18,
    })
    age!: number;

    @Prop({
        default: true,
    })
    isActive!: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);