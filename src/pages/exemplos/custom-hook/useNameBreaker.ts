import { useEffect, useState } from "react";

export const useNameBreaker = (
  fullName: string
): {
  firstName: string;
  lastName: string;
} => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  useEffect(() => {

    // const obj = {a: 1, b:2}
    // const {a, b} = obj

    // const arr = [1, 2, 3]
    // const [a, b, c] = arr
    // Paulo Amorim

    const [firstName, lastName] = fullName.split(" ");
    setFirstName(firstName);
    setLastName(lastName);
  }, [fullName]);

  return {
    firstName,
    lastName,
  };
};

export default useNameBreaker;
