import { ApiModel, ApiModelProperty } from "swagger-express-ts";

@ApiModel({
  description: Version.name + " description",
  name: Version.name,
})
export class Version {
  @ApiModelProperty({
    description: "Id of version",
    required: true,
    // there is invalid typings in the lib, so we either have to ignore ts errors for 'example', or just fork the package and fix it
    //@ts-ignore
    example: "123456789",
  })
  id: number;

  @ApiModelProperty({
    description: "",
    required: true,
    // there is invalid typings in the lib, so we either have to ignore ts errors for 'example', or just fork the package and fix it
    //@ts-ignore
    example: "Some stuff",
  })
  name: string;

  @ApiModelProperty({
    description: "Description of version",
    required: true,
  })
  description: string;
}
