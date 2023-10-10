function Validator(options) {}

// định nghĩa các qui tắc (yêu cầu)
// nguyên tắc các rule
// 1) khi có lỗi -> trả ra message lỗi
// 2) khi hợp lệ -> không trả cái gì cả
Validator.isRequired = function (selector, message) {
  return {
    selector,
    test(value) {
      return value.trim() ? undefined : message || "Please enter this field";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector,
    test(value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || "This field must be email";
    },
  };
};

Validator.isMinLength = function (selector, min, message) {
  return {
    selector,
    test(value) {
      return value.length >= min
        ? undefined
        : message || `Password needs at least ${min} characters`;
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector,
    test(value) {
      return value === getConfirmValue()
        ? undefined
        : message || `Input data does not match`;
    },
  };
};

Validator.isConfirmAcc = function (selector, getConfirmValue, message) {
  return {
    selector,
    test(value) {
      return value === getConfirmValue()
        ? undefined
        : message || `Please enter this field`;
    },
  };
};

Validator.isConfirmPass = function (selector, getConfirmValue, message) {
  return {
    selector,
    test(value) {
      return value === getConfirmValue()
        ? undefined
        : message || `Please enter this field`;
    },
  };
};
