import { useState } from 'react';
import { Schema } from '../types/openapi';
import SchemaProperty from './SchemaProperty';

const SchemaEditor = () => {
    const [schema, setSchema] = useState<Schema>({
        title: '',
        multipleOf: 0,
        maximum: 0,
        exclusiveMaximum: false,
        minimum: 0,
        exclusiveMinimum: false,
        maxLength: 0,
        minLength: 0,
        pattern: '',
        maxItems: 0,
        minItems: 0,
        uniqueItems: false,
        maxProperties: 0,
        minProperties: 0,
        required: [],
        enum: [],
        type: 'string',
        not: {},
        allOf: [],
        oneOf: [],
        anyOf: [],
        items: {} as Schema,
        properties: {},
        additionalProperties: false,
        description: '',
        format: '',
        default: null,
        nullable: false,
        discriminator: { propertyName: '' },
        readOnly: false,
        writeOnly: false,
        example: null,
        externalDocs: {
            url: '',
            description: ''
        },
        deprecated: false,
        xml: {}
    });

    const handleInputChange = (property: string, value: any) => {
        setSchema((prevSchema) => ({ ...prevSchema, [property]: value }));
    };

    const handleNestedInputChange = (property: string, nestedProperty: string, value: any) => {
        setSchema((prevSchema) => {
            const updatedSchema = { ...prevSchema };
            updatedSchema[property] = { ...updatedSchema[property] };
            updatedSchema[property][nestedProperty] = value;
            return updatedSchema;
        });
    };

    return (
        <div className="container mx-auto p-4 pt-6 pb-8 bg-white rounded shadow-md">
            <h2 className="text-3xl font-bold mb-4">Schema Editor</h2>
            <form>
                <div className="flex flex-wrap -mx-4 mb-4">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <input
                            placeholder='Enter title'
                            type="text"
                            value={schema.title}
                            onChange={(e) => handleInputChange('title', e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <input
                            placeholder='Enter multiple of'
                            type="number"
                            value={schema.multipleOf}
                            onChange={(e) => handleInputChange('multipleOf', e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Maximum
                        </label>
                        <input
                            placeholder='Enter maximum'
                            type="number"
                            value={schema.maximum}
                            onChange={(e) => handleInputChange('maximum', e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Exclusive Maximum
                        </label>
                        <input
                            placeholder='Enter exclusive maximum'
                            type="checkbox"
                            checked={schema.exclusiveMaximum}
                            onChange={(e) => handleInputChange('exclusiveMaximum', e.target.checked)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Minimum
                        </label>
                        <input
                            placeholder='Enter minimum'
                            type="number"
                            value={schema.minimum}
                            onChange={(e) => handleInputChange('minimum', e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Exclusive Minimum
                        </label>
                        <input
                            placeholder='Enter exclusive minimum'
                            type="checkbox"
                            checked={schema.exclusiveMinimum}
                            onChange={(e) => handleInputChange('exclusiveMinimum', e.target.checked)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Max Length
                        </label>
                        <input
                            placeholder='Enter max length'
                            type="number"
                            value={schema.maxLength}
                            onChange={(e) => handleInputChange('maxLength', e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="minLength">
                            Min Length
                        </label>
                        <input
                            type="number"
                            id="minLength"
                            value={schema.minLength}
                            onChange={(e) => handleInputChange('minLength', e.target.value)}
                            placeholder="Enter min length"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="pattern">
                            Pattern
                        </label>
                        <input
                            type="text"
                            id="pattern"
                            value={schema.pattern}
                            onChange={(e) => handleInputChange('pattern', e.target.value)}
                            placeholder="Enter pattern"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="maxItems">
                            Max Items
                        </label>
                        <input
                            type="number"
                            id="maxItems"
                            value={schema.maxItems}
                            onChange={(e) => handleInputChange('maxItems', e.target.value)}
                            placeholder="Enter max items"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="minItems">
                            Min Items
                        </label>
                        <input
                            type="number"
                            id="minItems"
                            value={schema.minItems}
                            onChange={(e) => handleInputChange('minItems', e.target.value)}
                            placeholder="Enter min items"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="uniqueItems">
                            Unique Items
                        </label>
                        <input
                            type="checkbox"
                            id="uniqueItems"
                            checked={schema.uniqueItems}
                            onChange={(e) => handleInputChange('uniqueItems', e.target.checked)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="maxProperties">
                            Max Properties
                        </label>
                        <input
                            type="number"
                            id="maxProperties"
                            value={schema.maxProperties}
                            onChange={(e) => handleInputChange('maxProperties', e.target.value)}
                            placeholder="Enter max properties"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="minProperties">
                            Min Properties
                        </label>
                        <input
                            type="number"
                            id="minProperties"
                            value={schema.minProperties}
                            onChange={(e) => handleInputChange('minProperties', e.target.value)}
                            placeholder="Enter min properties"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="required">
                            Required
                        </label>
                        <input
                            type="text"
                            id="required"
                            value={schema.required?.join(', ')}
                            onChange={(e) => handleInputChange('required', e.target.value.split(', '))}
                            placeholder="Enter required"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="enum">
                            Enum
                        </label>
                        <input
                            type="text"
                            id="enum"
                            value={schema.enum?.join(', ') ?? ''}
                            onChange={(e) => handleInputChange('enum', e.target.value.split(', '))}
                            placeholder="Enter enum"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="type">
                            Type
                        </label>
                        <select
                            id="type"
                            value={schema.type}
                            onChange={(e) => handleInputChange('type', e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        >
                            <option value="string">String</option>
                            <option value="number">Number</option>
                            <option value="integer">Integer</option>
                            <option value="boolean">Boolean</option>
                            <option value="array">Array</option>
                            <option value="object">Object</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="not">
                            Not
                        </label>
                        <input
                            type="text"
                            id="not"
                            value={JSON.stringify(schema.not)}
                            onChange={(e) => handleInputChange('not', e.target.value)}
                            placeholder="Enter not"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="allOf">
                            All Of
                        </label>
                        <input
                            type="text"
                            id="allOf"
                            value={schema.allOf?.join(', ') ?? ''}
                            onChange={(e) => handleInputChange('allOf', e.target.value.split(', '))}
                            placeholder="Enter all of"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="oneOf">
                            One Of
                        </label>
                        <input
                            type="text"
                            id="oneOf"
                            value={schema.oneOf?.join(', ') ?? ''}
                            onChange={(e) => handleInputChange('oneOf', e.target.value.split(', '))}
                            placeholder="Enter one of"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="anyOf">
                            Any Of
                        </label>
                        <input
                            placeholder='Enter any of'
                            type="text"
                            value={schema.anyOf?.join(', ') ?? ''}
                            onChange={(e) => handleInputChange('anyOf', e.target.value.split(', '))}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Items
                        </label>
                        <input
                            placeholder='Enter items'
                            type="text"
                            value={JSON.stringify(schema.items)}
                            onChange={(e) => handleInputChange('items', e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Properties
                        </label>
                        <input
                            placeholder='Enter properties'
                            type="text"
                            value={JSON.stringify(schema.properties)}
                            onChange={(e) => handleInputChange('properties', e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Additional Properties
                        </label>
                        <input
                            placeholder='Enter additional properties'
                            type="checkbox"
                            checked={schema.additionalProperties === true}
                            onChange={(e) => handleInputChange('additionalProperties', e.target.checked)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Description
                        </label>
                        <textarea
                            placeholder='Enter description'
                            value={schema.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Format
                        </label>
                        <input
                            placeholder='Enter format'
                            type="text"
                            value={schema.format}
                            onChange={(e) => handleInputChange('format', e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Default
                        </label>
                        <input
                            placeholder='Enter default'
                            type="text"
                            value={schema.default}
                            onChange={(e) => handleInputChange('default', e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Nullable
                        </label>
                        <input
                            placeholder='Enter nullable'
                            type="checkbox"
                            checked={schema.nullable}
                            onChange={(e) => handleInputChange('nullable', e.target.checked)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Discriminator
                        </label>
                        <input
                            placeholder='Enter discriminator'
                            type="text"
                            value={schema.discriminator?.propertyName ?? ''}
                            onChange={(e) => handleNestedInputChange('discriminator', 'propertyName', e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            ReadOnly
                        </label>
                        <input
                            placeholder='Enter read only'
                            type="checkbox"
                            checked={schema.readOnly}
                            onChange={(e) => handleInputChange('readOnly', e.target.checked)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            WriteOnly
                        </label>
                        <input
                            placeholder='Enter write only'
                            type="checkbox"
                            checked={schema.writeOnly}
                            onChange={(e) => handleInputChange('writeOnly', e.target.checked)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Example
                        </label>
                        <input
                            placeholder='Enter example'
                            type="text"
                            value={schema.example}
                            onChange={(e) => handleInputChange('example', e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            External Docs
                        </label>
                        <input
                            placeholder='Enter external docs'
                            type="text"
                            value={schema.externalDocs?.url ?? ''}
                            onChange={(e) => handleNestedInputChange('externalDocs', 'url', e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Deprecated
                        </label>
                        <input
                            placeholder='Enter deprecated'
                            type="checkbox"
                            checked={schema.deprecated}
                            onChange={(e) => handleInputChange('deprecated', e.target.checked)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                </div>
            </form>
        </div >
    );
};

export default SchemaEditor;





