const REGEXP = {
  USERNAME: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|_ |]+$/,
  PHONE_NUMBER: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
  DICIMAL: /[^0-9]/g,
  REPLACE_PHONE_NUMBER: /(^1[0-9]{3}|^0[0-9]{2})([0-9]{3,4})?([0-9]{4})$/,
  DASH: /(-{2,})/g,
  RRN_FIRST: /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/,
};

export default REGEXP;
