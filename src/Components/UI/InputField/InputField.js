import React from 'react'

const InputField = ({ type, value, label, name, placeholder, onChange }) => (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );

export default InputField