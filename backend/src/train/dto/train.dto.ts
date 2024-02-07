import { IsInt, IsString, MaxLength, MinLength } from 'class-validator';

export class TrainBaseDto {
  @IsString()
  @MinLength(2)
  @MaxLength(16)
  from: string;

  @IsString()
  @MinLength(2)
  @MaxLength(16)
  to: string;

  departureTime: string;

  arrivalTime: string;
}

export class TrainDto extends TrainBaseDto {
  @IsInt()
  num: number;
}

export class TrainReturnDto extends TrainDto {
  @IsInt()
  id: number;
}
