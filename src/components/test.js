import React from 'react';

const options = {
  "base20": { type: "20cm NY Style", price: 6.45 },
  "base25": { type: "25cm NY Style", price: 8.99 },
  "base30": { type: "30cm NY Style", price: 11.49 },
  "base35": { type: "35cm NY Style", price: 13.49 }
}

const Select = (props) => (
  <div className="form-group">
    <select
      name={props.name}
      value={props.selectedOption}
      onChange={props.controlFunc}
      className="form-select">
      <option value="">select base</option>
      {props.options.map(base => {
        return (
          <option
            key={base}
            value={base.type}>{base}</option>
        );
      })}
    </select>
  </div>
);

// Select.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   options: React.PropTypes.array.isRequired,
//   selectedOption: React.PropTypes.string,
//   controlFunc: React.PropTypes.func.isRequired,
//   placeholder: React.PropTypes.string
// };

export default Select;
