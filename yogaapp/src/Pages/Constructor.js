import Gallery from "../Components/Gallery/Gallery";

const Constructor = () => {
  return (
    <div>
      <h1>Build your Practice: </h1>

      <label for="cars">Asanas Categorys:</label>

      <select name="category" id="category">
        <option value="balance">Supine / Balancing</option>
        <option value="backbend">Prone / Backbend</option>
        <option value="armsLegs">Arm and Leg Support / Backbend</option>
        <option value="armsLegs">Arm and Leg Support / Neutral</option>
      </select>

      <br />
      <label for="level">Students Level:</label>
      
      <select name="level" id="level">
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <br />

      <button>Next</button>
      <br />
      <br />
    </div>
  );
};
export default Constructor;
