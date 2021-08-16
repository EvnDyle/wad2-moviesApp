import _ from "lodash";

export function excerpt(string) {
  const truncate = _.truncate;
  return truncate(string, {
    length: 200, // maximum 200 characters
    separator: /,?\.* +/ // separate by spaces, including preceding commas and periods
  });
}