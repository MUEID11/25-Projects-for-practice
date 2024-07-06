
const List = () => {

  const today = new Date().getDate();
  console.log(typeof today);
  const matchedDates = people.filter((person) => {
    const birthdays = Number(person.birthday.split("-")[0]);
    console.log(typeof birthdays);
    return birthdays;
  });
  console.log(matchedDates);
  return (
    <div className="">
      {matchedDates.length === 0 ? (
        <div>
          <h4>No birthdays Today</h4>
        </div>
      ) : (
        <div>
          {matchedDates.map((person) => (
            <article key={person.id} className="person">
              <img src={person.image} alt={person.name} />
              <div>
                <h4>{person.name}</h4>
                <p>{person.age} years old</p>
                <p>Birthday: {person.birthday}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
