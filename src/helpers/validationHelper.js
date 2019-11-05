export default (type, value, required) => {
  if (required && value === '') {
    return {
      valid: false,
      message: 'Required field',
    };
  }
  if (value === '') {
    return {
      valid: true,
      message: '',
    };
  }
  switch (type) {
    case 'email':
      return {
        valid: value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
        message: 'Email format not valid',
      };
    case 'text':
      return {
        valid: value.match(/^[A-Za-z]+$/),
        message: 'This field can only contain letters',
      };
    case 'password':
      return {
        valid: value.match(/^.{8,}$/),
        message: 'Password must be at least 8 characters long',
      };
    case 'phone':
      return {
        valid: value.match(/^[0-9]{4,8}$/),
        message: 'Phone format not valid.',
      };
    default:
      return true;
  }
};
