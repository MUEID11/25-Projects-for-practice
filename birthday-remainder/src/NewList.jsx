import { useEffect, useState } from "react";

const NewList = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const response = async () => {
      const res = await fetch("./../public/people.json");
      const data = await res.json();
      setPeople(data);
    };
    response();
  }, []);
  const today = new Date().getDate();
  const matchedDates = people.filter((person) => {
    const matchingDate = Number(person.birthday.split("-")[0]);
    console.log(matchingDate);
    return today === matchingDate;
  });
  return (
    <div className="">
      {matchedDates.length === 0 ? (
        <div>No Birtdays today</div>
      ) : (
        <div>
          {matchedDates.map((person) => (
            <article key={person?.id} className="person">
              <img src={person.image} alt={`${person.name}'s image`} />
              <div>
              <h1 className="text-lg font-semibold">Name: {person.name}</h1>
              <p className="font-medium">Age: {person.age}</p>
              <p className="text-sm font-medium">Birthdate: {person.birthday}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewList;
