import { ApiProperty } from "@nestjs/swagger/dist";
export class Cat {

        @ApiProperty()
        id: number;
      
        @ApiProperty()
        name: string;
      
        @ApiProperty()
        age: number;
      
        @ApiProperty()
        breed: string;
      
}
