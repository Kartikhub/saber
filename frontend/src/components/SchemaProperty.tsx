import PropertyEditor from './PropertyEditor';

const SchemaProperty = ({ property, schema, onChange }: any) => {
    return (
        <div>
            <label>
                {property}
                <PropertyEditor
                    property={schema.properties[property]}
                    value={schema[property]}
                    onChange={(value: any) => onChange(property, value)}
                />
            </label>
        </div>
    );
};

export default SchemaProperty;