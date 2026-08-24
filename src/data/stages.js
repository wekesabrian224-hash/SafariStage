import nairobiImage from "../assets/images/nairobi-stage.jpg";
import mombasaImage from "../assets/images/mombasa-stage.jpg";
import kisumuImage from "../assets/images/kisumu-stage.jpg";

const stages = [
  {
    id: 1,
    name: "Nairobi CBD Stage",
    city: "Nairobi",
    country: "Kenya",
    landmark: "Near National Archives",
    image: nairobiImage,
    destinations: ["Kisumu", "Kakamega", "Busia"],
    verified: true,
  },

  {
    id: 2,
    name: "Mombasa Bus Stage",
    city: "Mombasa",
    country: "Kenya",
    landmark: "Mombasa CBD",
    image: mombasaImage,
    destinations: ["Nairobi", "Malindi", "Kilifi"],
    verified: true,
  },

  {
    id: 3,
    name: "Kisumu Main Stage",
    city: "Kisumu",
    country: "Kenya",
    landmark: "Kisumu CBD",
    image: kisumuImage,
    destinations: ["Nairobi", "Kakamega", "Busia"],
    verified: true,
  },
];

export default stages;
