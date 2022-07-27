import React from 'react';
import styles from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';
export default function Filter({ value, onChange }) {
 
  return (
    
    <label className={styles.label} >
      <input
        className={styles.input}
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
