import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsInt()
  @Min(18)
  age!: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}