
const PropertyEditor = ({ property, value, onChange }: any) => {
  switch (property.type) {
    case 'string':
      return (
        <input
          placeholder='text'
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case 'number':
      return (
        <input
          placeholder='number'
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case 'boolean':
      return (
        <input
          placeholder='boolean'
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
      );
    default:
      return <div>Unknown property type</div>;
  }
};

export default PropertyEditor;