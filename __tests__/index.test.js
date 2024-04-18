const {
  getEternalFlamePowers,
  getMadameUpperCutAge,
  getMoleculeManHeight,
  getMemberNames,
  getSquadName,
} = require("../index");

describe("accessing data from JSON objet", () => {
  test("getSquadName - retrive squad name from object", () => {
    expect(getSquadName()).toEqual("Super hero squad");
  });
  test("getMemberNames - should return an array of squad members names", () => {
    expect(getMemberNames()).toEqual(["Molecule Man", "Madame Uppercut", "Eternal Flame"]);
  });
  test("getMoleculeManHeight - should return the height of Molecule Man as an object with height label", () => {
    expect(getMoleculeManHeight()).toEqual({ height: 180 });
  });
  test("getMadameUpperCutAge - should return Madame Uppercut age", () => {
    expect(getMadameUpperCutAge()).toEqual(39);
  });
  test("getEternalFlamePowers - should return an array of Eternal Flames powers", () => {
    expect(getEternalFlamePowers()).toEqual([
      "Immortality",
      "Heat Immunity",
      "Inferno",
      "Teleportation",
      "Interdimensional travel",
    ]);
  });
});
