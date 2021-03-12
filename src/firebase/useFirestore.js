import firestore from "../firebase/config";

let hiderOneX: number;
let hiderOneY: number;
let hiderTwoX: number;
let hiderTwoY: number;
let hiderThreeX: number;
let hiderThreeY: number;

firestore
  .collection("characters")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      hiderOneX = doc.data()["Hiders"]["hiderOne"]["x"];
      hiderOneY = doc.data()["Hiders"]["hiderOne"]["y"];
      hiderTwoX = doc.data()["Hiders"]["hiderTwo"]["x"];
      hiderTwoY = doc.data()["Hiders"]["hiderTwo"]["y"];
      hiderThreeX = doc.data()["Hiders"]["hiderThree"]["x"];
      hiderThreeY = doc.data()["Hiders"]["hiderThree"]["y"];
    });
  });

export { hiderOneX, hiderOneY, hiderTwoX, hiderTwoY, hiderThreeX, hiderThreeY };
