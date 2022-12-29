import { getBirthday, getImage } from "../../../utilities/functions";
import notFound from "../../../assets/img/notFound.png";
import { StyledPersonData } from "../StyledPersonData";

const PersonData = ({ person }) => {
  return (
    <>
      <StyledPersonData>
        <div>
          <img
            loading="lazy"
            src={
              person.profile_path
                ? getImage("original", person.profile_path)
                : notFound
            }
            alt={person.name}
          />
        </div>
        <div className="name">
          <h1>{person.name}</h1>
        </div>
        <div>
          <h3>Personal Informations</h3>
          <div className="informations">
            {person.known_for_department && (
              <div>
                <h4>Department</h4>
                <p>{person.known_for_department}</p>
              </div>
            )}

            {person.gender && (
              <div>
                <h4>Gender</h4>
                <p>{person.gender == 1 ? "Female" : "Male"}</p>
              </div>
            )}

            {person.birthday && (
              <div>
                <h4>Birthday</h4>
                <p>{getBirthday(person.birthday)}</p>
              </div>
            )}

            {person.deathday && (
              <div>
                <h4>Death day</h4>
                <p>{person.deathday}</p>
              </div>
            )}

            {person.place_of_birth && (
              <div>
                <h4>Place of Birth</h4>
                <p>{person.place_of_birth}</p>
              </div>
            )}

            {person.biography && (
              <div className="biography">
                <h4>Biography</h4>
                <p>{person.biography}</p>
              </div>
            )}
          </div>
        </div>
      </StyledPersonData>
    </>
  );
};

export default PersonData;
