function validateIfFieldsNotEmpty(data) {
  const validation = Object.values(data).every(
    (item) => item !== "" && item !== null
  );
  return validation;
}

module.exports = validateIfFieldsNotEmpty;
