const Input = ({ label, onChange, formData, name }) => {
  const handleChange = (e) => {
        onChange(e);
    };

  return (
    <div>
      {label && <label className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">{label}</label>}
        <input
              className="shadow-xs bg-gray-950 border border-gray-300 border-opacity-15 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
              type="text"
              name={name}
              value={formData.name}
              onChange={handleChange}
              placeholder={label.charAt(0).toUpperCase() + label.slice(1)}
          />
    </div>
  );
}

export default Input;