interface Schema {
    title?: string;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    maxProperties?: number;
    minProperties?: number;
    required?: string[];
    enum?: string[];
    type?: 'array' | 'boolean' | 'integer' | 'number' | 'object' | 'string';
    not?: {
      oneOf?: Schema | Reference
    };
    allOf?: (Schema | Reference)[];
    oneOf?: (Schema | Reference)[];
    anyOf?: (Schema | Reference)[];
    items?: Schema | Reference;
    properties?: {
      [key: string]: Schema;
    };
    additionalProperties?: Schema | boolean;
    description?: string;
    format?: string;
    default?: any;
    nullable?: boolean;
    discriminator?: Discriminator;
    readOnly?: boolean;
    writeOnly?: boolean;
    example?: any;
    externalDocs?: ExternalDocumentation;
    deprecated?: boolean;
    xml?: XML;
    [key: string]: any;
  }
  
  interface Reference {
    $ref: string;
  }
  
  interface Discriminator {
    propertyName: string;
    mapping?: {
      [key: string]: string;
    };
  }
  
  interface ExternalDocumentation {
    url: string;
    description?: string;
  }
  
  interface XML {
    name?: string;
    namespace?: string;
    prefix?: string;
    attribute?: boolean;
    wrapped?: boolean;
  }
  

  export type { Schema };
  